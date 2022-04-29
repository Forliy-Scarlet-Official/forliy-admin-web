<template>111</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import { getColorList } from "@/api/index";
onMounted(() => {
  getColorList().then((res) => {
    // console.log(res.data)
  });
});
</script>
<style lang="scss" scoped></style>
