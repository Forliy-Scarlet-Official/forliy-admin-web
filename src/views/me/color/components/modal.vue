<template>
  <n-modal
    v-model:show="show"
    preset="dialog"
    :on-after-leave="handleModelClose"
  >
    <template #header>颜色管理</template>
    <n-form>
      <n-form-item path="age" label="年龄">
        <n-input />
      </n-form-item>
    </n-form>
    <template #action></template>
  </n-modal>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";
defineProps({
  show: Boolean,
});

const emit = defineEmits(["modelClose"]);

function handleModelClose() {
  emit("modelClose");
}
</script>
<style lang="scss" scoped></style>
