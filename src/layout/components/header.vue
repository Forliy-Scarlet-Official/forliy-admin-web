<template>
  <div class="header">
    <!-- 面包屑 -->
    <bread-crumb></bread-crumb>
  </div>
</template>
<script lang="ts" setup>
import BreadCrumb from "./breadcrumb.vue";
</script>
<style lang="scss" scoped>
.header {
  padding: 0 20px;
  height: 50px;
  box-shadow: 10px 0px 10px 1px rgba($color: #ccc, $alpha: 0.5);
  display: flex;
  align-items: center;
}
</style>
