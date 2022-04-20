<template>
    <h1>{{ t("WhatIsHapin.title") }}</h1>
    <p>What is Hapin?</p>
    <p>
        {{ t("WhatIsHapin.p1") }}
        <b>{{ t("WhatIsHapin.p2") }}</b>
        {{ t("WhatIsHapin.p3") }}
        {{ t("WhatIsHapin.p4") }}
        <b>{{ t("WhatIsHapin.p5") }}</b>
        {{ t("WhatIsHapin.p6") }}
        <b>{{ t("WhatIsHapin.p7") }}</b>
        {{ t("WhatIsHapin.p8") }}
    </p>
    <p>
        {{ t("WhatIsHapin.p9") }}
        <a href="https://open-kazakh.vercel.app/hapin/repl">{{
            t("WhatIsHapin.p10")
        }}</a>
    </p>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n({
    inheritLocale: true,
});
console.log(locale);
</script>
