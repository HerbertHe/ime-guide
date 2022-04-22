import { defineConfig } from "vite"
import vueI18n from "@intlify/vite-plugin-vue-i18n"

import path from "path"

export default defineConfig({
    base: "/ime-guide/",
    plugins: [
        vueI18n({
            include: path.resolve(__dirname, "./locales/*")
        })
    ]
})
