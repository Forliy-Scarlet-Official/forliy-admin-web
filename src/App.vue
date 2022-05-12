<template>
  <n-message-provider>
    <router-view></router-view>
  </n-message-provider>
</template>
<script setup lang="ts"></script>
<style lang="scss">
* {
  box-sizing: border-box;
  font-family: "JetBrains Mono";
}

@font-face {
  font-family: "JetBrains Mono";
  src: url("@/assets/fonts/JetBrainsMono-Regular.ttf");
}
</style>
