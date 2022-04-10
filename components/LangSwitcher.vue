<template>
    <select class="fixed top-7 right-7 text-dark-900 rounded p-1 dark:(bg-dark-900 text-light-900)"
        @change="handleChange">
        <option value="cn">简体中文</option>
        <option value="kz">قازاق</option></select>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n"
const { locale } = useI18n({
    inheritLocale: true,
})
const handleChange = (e: Event) => {
    const target = e.target as HTMLSelectElement
    locale.value = target.value
    document.getElementById("slide-content").style.direction = target.value === "cn" ? "ltr" : "rtl"
}
</script>
