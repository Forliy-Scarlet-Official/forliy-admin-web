<template>
  <div class="home">
    <n-gradient-text
      :size="60"
      :gradient="{ from: '#f093fb', to: '#f5576c', deg: 90 }"
    >
      Hello, Forliy Admin!
    </n-gradient-text>
  </div>
</template>
<script lang="ts" setup>
import { NGradientText } from "naive-ui";
</script>
<style lang="scss" scoped></style>
