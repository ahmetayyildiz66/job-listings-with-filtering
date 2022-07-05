<template>
  <span class="label" :class="{ 'label--new': prop.new }">
    {{ prop.label }}
  </span>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const prop = defineProps<{ label: string; new?: boolean }>();
</script>

<style lang="scss" scoped>
.label {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  background-color: var(--clr-remove-bg);
  height: 2.4rem;
  padding: 0 0.8rem;
  border-radius: 2rem;
  color: var(--clr-white);

  &--new {
    background-color: var(--clr-primary);
  }
}
</style>
