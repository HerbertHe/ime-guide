<template>
    <h1>在线转化体验</h1>
    <select class="border" :value="tranformDir">
        <option value="HapinToArabic">哈拼 -> 老文字</option>
        <option value="ArabicToHapin">老文字 -> 哈拼</option>
        <option value="CyrillicToHapin">西里尔字母 -> 哈拼</option>
        <option value="CyrillicToArabic">西里尔字母 -> 老文字</option>
    </select>
    <div class="flex flex-row box-border h-2/3 mt-4">
        <textarea
            v-model="rawText"
            class="flex-1 p-5 h-full border resize-none"
            placeholder="在此输入文本"
        ></textarea>
        <button @click="handleTranform" class="mx-3 p-3 bg-dark-900 text-white">转化👉</button>
        <textarea
            v-model="transformedText"
            class="flex-1 p-5 h-full border read-only:bg-light-900 resize-none"
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

const rawText = ref("")
const transformedText = ref("")
const tranformDir = ref("HapinToArabic")

const handleTranform = () => {
    switch (tranformDir.value) {
        case "HapinToArabic":
            transformedText.value = tranformHapinToArabic(rawText.value)
            break
        case "ArabicToHapin":
            transformedText.value = tranformArabicToHapin(rawText.value)
            break
        case "CyrillicToHapin":
            transformedText.value = tranformCyrillicToHapin(rawText.value)
            break
        case "CyrillicToArabic":
            transformedText.value = tranformCyrillicToArabic(rawText.value)
            break
    }
}
</script>
