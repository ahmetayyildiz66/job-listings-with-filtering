<template>
  <button class="filter-btn">
    <span class="filter-btn__tag">{{ label }}</span>
    <span class="filter-btn__remove">
      <RemoveIcon fill-color="var(--clr-white)" :width="14" :height="14" />
    </span>
  </button>
</template>

<script lang="ts" setup>
import RemoveIcon from "./icons/RemoveIcon.vue";
import { defineProps } from "vue";

defineProps({
  label: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.filter-btn {
  height: 3.2rem;
  border: none;
  font-family: "League Spartan", sans-serif;
  font-weight: 700;
  font-size: 1.6rem;
  background-color: var(--clr-secondary);
  color: var(--clr-primary);
  display: flex;
  align-items: center;

  &__tag {
    padding: 4px 0 4px 8px;
  }

  &__remove {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.2rem;
    width: 3.2rem;
    background-color: var(--clr-primary);
    border-top-right-radius: var(--size-border-radius);
    border-bottom-right-radius: var(--size-border-radius);
    height: 100%;
    margin-left: 0.8rem;
    transition: all 0.3s;

    &:hover {
      cursor: pointer;
      background-color: var(--clr-remove-bg);
    }
  }
}
</style>
