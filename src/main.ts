import { createApp } from "vue"
import App from "@/App.vue"
import { registerPlugins } from "@/plugins"

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

import "animate.css"

const app = createApp(App)

registerPlugins(app).
    then(() => app.mount("#app"))
