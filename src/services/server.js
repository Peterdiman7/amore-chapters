import path from "path"
import express from "express"
import mysql from "mysql2/promise"
import cors from "cors"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"

dotenv.config({ path: path.resolve("/home/devalex/amore-chapters.com/amore-chapters/.env") })

const app = express()

// ---- CORS configuration ----
const allowedOrigins = [
    "https://amore-chapters.com",
    "http://localhost:9000",
    "http://localhost:5173"
]

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, origin)
        } else {
            callback(new Error("Not allowed by CORS"))
        }
    },
    credentials: true
}))

app.use(express.json())
app.use(cookieParser())

// ---- MYSQL POOL (auto reconnect) ----
const pool = mysql.createPool({
    host: process.env.DB_HOST || "127.0.0.1",
    user: process.env.DB_USER,
    port: Number(process.env.DB_PORT) || 3306, // use 3307 only if SSH tunnel
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

// ---- JWT SECRET ----
const JWT_SECRET = process.env.JWT_SECRET
if (!JWT_SECRET) {
    console.error("Missing JWT_SECRET in .env")
    process.exit(1)
}

// ---- REGISTER USER ----
app.post("/auth/register", async (req, res) => {
    const { username, email, password } = req.body

    if (!username || !email || !password) {
        return res.status(400).json({ error: "All fields are required" })
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        await pool.execute(
            "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
            [username, email, hashedPassword]
        )

        res.json({ message: "User registered successfully" })
    } catch (err) {
        console.error("REGISTER ERROR:", err)
        if (err.code === "ER_DUP_ENTRY") {
            res.status(409).json({ error: "Username or email already exists" })
        } else {
            res.status(500).json({ error: "Database error" })
        }
    }
})

// ---- LOGIN USER (sets JWT cookie) ----
app.post("/auth/login", async (req, res) => {
    const { username, password } = req.body

    try {
        const [rows] = await pool.execute(
            "SELECT * FROM users WHERE username = ?",
            [username]
        )

        if (rows.length === 0) {
            return res.status(401).json({ error: "Invalid credentials" })
        }

        const user = rows[0]
        const match = await bcrypt.compare(password, user.password)

        if (!match) {
            return res.status(401).json({ error: "Invalid credentials" })
        }

        const token = jwt.sign(
            { id: user.id, username: user.username, email: user.email },
            JWT_SECRET,
            { expiresIn: "2h" }
        )

        // Set token as HttpOnly cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,      // set true if using HTTPS
            sameSite: "lax",
            maxAge: 2 * 60 * 60 * 1000 // 2 hours
        })

        res.json({ message: "Login successful" })
    } catch (err) {
        console.error("LOGIN ERROR:", err)
        res.status(500).json({ error: "Database error" })
    }
})

// ---- PROTECTED ROUTE ----
app.get("/auth/me", (req, res) => {
    const token = req.cookies.token
    if (!token) return res.status(401).json({ error: "Missing token" })

    try {
        const decoded = jwt.verify(token, JWT_SECRET)
        res.json(decoded)
    } catch (err) {
        res.status(401).json({ error: "Invalid or expired token" })
    }
})

// ---- LOGOUT ROUTE ----
app.post("/auth/logout", (req, res) => {
    res.clearCookie("token", { httpOnly: true, sameSite: "lax" })
    res.json({ message: "Logged out" })
})

// ---- START SERVER ----
app.listen(9100, () => {
    console.log("API running on http://localhost:9100")
})
