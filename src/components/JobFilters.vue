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
  flex-wrap: wrap;
  min-height: 7.2rem;
  background-color: green;
  transform: translateY(-3.6rem);
  padding: 2rem 1.9rem;
  border-radius: var(--size-border-radius);
  background-color: var(--clr-white);

  & > *:not(:last-child) {
    margin-right: 1.6rem;
    margin-bottom: 1.6rem;
  }
}

@media only screen and (min-width: 376px) {
  .filters {
    padding: 2rem 4rem;
  }
}
</style>
