<template>
  <button class="tool" @click="onTool(tool)">{{ tool }}</button>
</template>

<script lang="ts" setup>
import { state } from "../composables/filters";
import { defineProps } from "vue";

const props = defineProps<{ tool: string }>();

const onTool = (tool: string) => {
  const filters = state.filters;
  if (filters.includes(tool)) {
    state.filters = state.filters.filter((filter) => filter !== tool);
  } else {
    state.filters.push(tool);
  }
};
</script>

<style lang="scss" scoped>
.tool {
  background-color: var(--clr-secondary);
  border: none;
  height: 3.2rem;
  padding: 4px 1rem;
  border-radius: var(--size-border-radius);
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--clr-primary);
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    color: var(--clr-secondary);
    background-color: var(--clr-primary);
  }
}
</style>
