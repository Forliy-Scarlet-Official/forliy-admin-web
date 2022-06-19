<template>
  <n-message-provider>
    <router-view></router-view>
  </n-message-provider>
</template>
<script setup lang="ts">
import { NMessageProvider } from "naive-ui";
import { onMounted } from "vue";
import { useStore } from "@/stores/theme";
const themeStore = useStore();
onMounted(() => {
  themeStore.initThemeState();
});
</script>
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
