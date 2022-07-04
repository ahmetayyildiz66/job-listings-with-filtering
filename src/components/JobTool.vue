<template>
  <button class="tool">{{ tool }}</button>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps<{ tool: string }>();

console.log("pops tool: ", props);
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
