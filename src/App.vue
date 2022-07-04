<template>
  <div class="app">
    <TheHeader />
    <main class="main">
      <JobFilters />
      <DevJobs />
    </main>
  </div>
</template>

<script lang="ts" setup>
import TheHeader from "./components/TheHeader.vue";
import JobFilters from "./components/JobFilters.vue";
import DevJobs from "./components/DevJobs.vue";
</script>

<style lang="scss">
@import "./style/main.scss";

.app {
  max-width: 144rem;
  margin: 0 auto;
  background-color: var(--clr-secondary);
  padding-bottom: 3.4rem;
}
.main {
  max-width: 32.7rem;
  margin: 0 auto;
}

.jobs {
  margin-top: 1.4rem;

  &__job {
    height: 28.1rem;
    margin-bottom: 1.6rem;
    background-color: orange;
  }
}

@media only screen and (min-width: 376px) {
  .app {
    padding-bottom: 12rem;
  }

  .main {
    max-width: 111rem;
  }
}
</style>
