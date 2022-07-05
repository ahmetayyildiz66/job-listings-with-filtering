<template>
  <section class="filters" v-if="state.filters.length">
    <div class="filters__list">
      <FilterButton
        v-for="filter in state.filters"
        :key="filter"
        :label="filter"
      />
    </div>

    <button class="filters__clear" @click="onClear">Clear</button>
  </section>
</template>

<script lang="ts" setup>
import FilterButton from "./FilterButton.vue";
import { state } from "../composables/filters";

const onClear = () => {
  state.filters = [];
};
</script>

<style lang="scss" scoped>
.filters {
  display: flex;
  align-items: center;
  min-height: 7.2rem;
  background-color: green;
  transform: translateY(-3.6rem);
  padding: 2rem 1.9rem;
  border-radius: var(--size-border-radius);
  background-color: var(--clr-white);

  &__list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.6rem;
  }

  &__clear {
    margin-left: auto;
    background: none;
    border: none;
    color: var(--clr-text);
    font-weight: 600;
    transition: all 0.3s;

    &:hover {
      color: var(--clr-primary);
      cursor: pointer;
      text-decoration: underline;
    }
  }
}

@media only screen and (min-width: 376px) {
  .filters {
    padding: 2rem 4rem;
  }
}
</style>
