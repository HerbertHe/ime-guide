<template>
    <div>{{ t("test") }}</div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n({
    inheritLocale: true
});


</script>
