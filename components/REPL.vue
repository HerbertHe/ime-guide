<template>
    <h1>{{ t("REPL.title") }}</h1>
    <select
        @change="handleChange"
        class="border rounded p-1 cursor-pointer dark:bg-dark-300"
        v-model="tranformDir"
    >
        <option value="HapinToArabic">{{ t("REPL.p1") }}</option>
        <option value="ArabicToHapin">{{ t("REPL.p2") }}</option>
        <option value="CyrillicToHapin">{{ t("REPL.p3") }}</option>
        <option value="CyrillicToArabic">{{ t("REPL.p4") }}</option>
    </select>
    <div class="flex flex-row box-border h-2/3 mt-4">
        <!-- BUG 修复 placeholder 文本的国际化 -->
        <textarea
            :dir="inputDir"
            v-model="rawText"
            class="rounded flex-1 p-5 h-full border resize-none dark:bg-dark-300"
            placeholder="在此输入文本"
        ></textarea>
        <button
            @click="handleTranform"
            class="rounded mx-3 p-3 bg-dark-900 text-white dark:bg-dark-300"
        >{{ t("REPL.p6") }}</button>
        <textarea
            :dir="displayDir"
            v-model="transformedText"
            class="rounded flex-1 p-5 h-full border read-only:(bg-light-900 dark:bg-dark-500) resize-none dark:bg-dark-300"
            readonly
            placeholder="转化结果"
        ></textarea>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import {
    transformArabicToHapin,
    transformCyrillicToArabic,
    transformCyrillicToHapin,
    transformHapinToArabic
} from "hapin-utils"
import { useI18n } from "vue-i18n"

const { t, locale } = useI18n({
    inheritLocale: true
})

const rawText = ref("")
const transformedText = ref("")
const tranformDir = ref("HapinToArabic")
const displayDir = ref("rtl")
const inputDir = ref("ltr")

const handleChange = (e: Event) => {
    const target = e.target as HTMLSelectElement
    switch (target.value) {
        case "HapinToArabic":
            tranformDir.value = "HapinToArabic"
            displayDir.value = "rtl"
            inputDir.value = "ltr"
            break
        case "ArabicToHapin":
            tranformDir.value = "ArabicToHapin"
            displayDir.value = "ltr"
            inputDir.value = "rtl"
            break
        case "CyrillicToHapin":
            tranformDir.value = "CyrillicToHapin"
            displayDir.value = "ltr"
            inputDir.value = "ltr"
            break
        case "CyrillicToArabic":
            tranformDir.value = "CyrillicToArabic"
            displayDir.value = "rtl"
            inputDir.value = "ltr"
            break
    }
}

const handleTranform = () => {
    switch (tranformDir.value) {
        case "HapinToArabic":
            transformedText.value = transformHapinToArabic(rawText.value)
            break
        case "ArabicToHapin":
            transformedText.value = transformArabicToHapin(rawText.value)
            break
        case "CyrillicToHapin":
            transformedText.value = transformCyrillicToHapin(rawText.value)
            break
        case "CyrillicToArabic":
            transformedText.value = transformCyrillicToArabic(rawText.value)
            break
    }
}
</script>
