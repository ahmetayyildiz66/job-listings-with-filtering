<template>
  <div class="app">
    <TheHeader />
    <main class="main">
      <JobFilters />
      <div class="jobs">
        <div class="jobs__job">Single Job</div>
        <div class="jobs__job">Single Job</div>
        <div class="jobs__job">Single Job</div>
        <div class="jobs__job">Single Job</div>
        <div class="jobs__job">Single Job</div>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import TheHeader from "./components/TheHeader.vue";
import JobFilters from "./components/JobFilters.vue";
</script>

<style lang="scss">
@import "./style/main.scss";

.app {
  max-width: 144rem;
  margin: 0 auto;
  background-color: var(--clr-secondary);
  height: 100vh;
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
  .main {
    max-width: 111rem;
  }

  .jobs {
    &__job {
      height: 15.2rem;
      background-color: blue;
      margin-bottom: 2.4rem;
    }
  }
}
</style>
