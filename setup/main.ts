import { defineAppSetup } from "@slidev/types";
import { createI18n } from "vue-i18n";
import messages from "@intlify/vite-plugin-vue-i18n/messages";

const i18n = createI18n({
    fallbackLocale: "cn",
    locale: "cn",
    messages,
});

export default defineAppSetup(({ app, router }) => {
    app.use(i18n);
});
