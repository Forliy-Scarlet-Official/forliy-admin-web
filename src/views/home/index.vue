<template>111</template>
<script lang="ts" setup>
import { onMounted } from "vue"
import { test } from "../../../api/index"
onMounted(() => {
  test().then((res) => {
    // console.log(res.data)
  })
})
</script>
<style lang="scss" scoped></style>
