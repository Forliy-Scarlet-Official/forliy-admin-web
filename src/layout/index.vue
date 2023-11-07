<script setup lang="ts"></script>

<template>
  <n-config-provider :theme-overrides="{ common: { fontWeightStrong: '600' } }">
    <div class="layout">
      <router-view></router-view>
    </div>
  </n-config-provider>
</template>

<style scoped lang="scss">
.layout {
  width: 100vw;
  height: 100vh;
}
</style>
