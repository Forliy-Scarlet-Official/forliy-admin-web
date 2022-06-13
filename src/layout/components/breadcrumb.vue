<template>
  <!-- 面包屑 -->
  <n-breadcrumb>
    <n-breadcrumb-item v-for="item in list" @click="handleClick(item)">
      {{ item.title }}
    </n-breadcrumb-item>
  </n-breadcrumb>
</template>
<script lang="ts" setup>
import { ref, onBeforeMount, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { NBreadcrumb, NBreadcrumbItem } from "naive-ui";
interface breadCrumbItem {
  path: string;
  title: string;
}

const route = useRoute();
const list = computed(() => {
  const arr = route.matched.map((item) => {
    return {
      path: String(item.path),
      title: String(item.meta.title),
    };
  });
  arr.splice(0, 1);
  return arr;
});

const router = useRouter();
function handleClick(item: breadCrumbItem) {
  router.push(item.path);
}
</script>
<style lang="scss" scoped></style>
