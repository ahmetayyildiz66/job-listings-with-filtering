<template>
  <section class="filters">
    <FilterButton />
    <FilterButton />
    <FilterButton />
  </section>
</template>

<script lang="ts" setup>
import FilterButton from "./FilterButton.vue";
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
