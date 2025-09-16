import createRouter from "@/router"

import { type App } from "vue"

export const registerPlugins = (app: App): Promise<void> => {
    return new Promise<void>((resolve) => {
        app.use(createRouter())
        resolve()
    })
}
