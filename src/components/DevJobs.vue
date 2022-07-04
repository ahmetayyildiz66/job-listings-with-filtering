<template>
  <section class="jobs">
    <DevJob v-for="job in jobs" :key="job.id" :job="job" />
  </section>
</template>

<script lang="ts" setup>
import DevJob from "./DevJob.vue";
import jobs from "../../data.json";

console.log("jobs: ", jobs);
</script>

<style lang="scss" scoped>
.jobs {
  margin-top: 1.4rem;
}
</style>
