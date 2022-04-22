<template>
    <h1>如何使用 hapin-arabic 输入方案？</h1>
    <p>How to use hapin-arabic schema?</p>
    <blockquote>
        <p>
            以 Windows 平台的 <b>小狼毫</b> 为例，更新只需要下载更新的版本覆盖即可：
        </p>
    </blockquote>
    <ol>
        <li>正确安装 Rime 输入法发行版启动</li>
        <li>下载 hapin-arabic
            最新输入方案 <a href="https://github.do/https://github.com/ha-pin/hapin-arabic/archive/refs/tags/v1.1.zip"> v1.0
            </a></li>
        <li>右击图标选择 “用户文件夹” 打开 </li>
        <li>将下载好的输入方案解压，选择 <b>红框内必要文件</b> 到 “用户文件夹”</li>
        <li>右击图标选择 “重新部署” 即可~
        </li>
    </ol>
    <div class="flex flex-row">
        <img :src="userDir" alt="打开用户文件夹" class="h-50 m-2">
        <img :src="redeploy" alt="重新部署" class="h-50 m-2">
        <img :src="files" alt="文件示意图" class="h-60 m-2">
        <img :src="use" alt="使用实例" class="m-2 h-13">   </div>
</template>

<script lang="ts" setup>
import userDir from "/assets/userDir.png?import"
import redeploy from "/assets/redeploy.png?import"
import files from "/assets/files.png?import"
import use from "/assets/use.png?import"
</script>
