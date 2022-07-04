<template>
  <div class="job">
    <img class="job__img" :src="require(`@/assets/${job.logo}`)" />
    <div class="job__detail">
      <div class="job__company">{{ job.company }}</div>
      <h2 class="job__position">{{ job.position }}</h2>
      <div class="job__work-type">
        <span class="job__postedAt">{{ job.postedAt }}</span>
        <span>{{ job.contract }}</span>
        <span>{{ job.location }}</span>
      </div>
    </div>
    <div class="job__tools">
      <JobTool v-for="(tool, index) in job.tools" :tool="tool" :key="index" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import JobTool from "./JobTool.vue";

interface Job {
  id: number;
  company: string;
  contract: string;
  featured: boolean;
  location: string;
  logo: string;
  position: string;
  postedAt: string;
  role: string;
  tools?: string[];
}

defineProps<{ job: Job }>();
</script>

<style lang="scss" scoped>
.job {
  position: relative;
  height: 28.1rem;
  margin-bottom: 4rem;
  background-color: var(--clr-white);
  border-radius: var(--size-border-radius);
  box-shadow: 0 5px 5px rgba(#2b3939, 0.3);
  padding: 4rem 2.4rem 2.4rem 2.4rem;
  display: flex;
  flex-direction: column;

  &__company {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--clr-primary);
  }

  &__position {
    margin-top: 0.9rem;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--clr-header);

    &:hover {
      cursor: pointer;
      color: var(--clr-primary);
    }
  }

  &__img {
    position: absolute;
    top: -2.4rem;
    left: 2.4rem;
    width: 4.8rem;
    height: 4.8rem;
  }

  &__detail {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  &__work-type {
    margin-top: 0.8rem;
    display: flex;
    align-items: center;
    color: var(--clr-text);

    & > *:not(:last-child) {
      position: relative;
      &::after {
        position: absolute;
        content: ".";
        right: -1.8rem;
        top: -0.3rem;
      }
      margin-right: 3.6rem;
    }
  }

  &__tools {
    & > *:not(:last-child) {
      margin-right: 1.6rem;
    }
  }
}

@media only screen and (min-width: 376px) {
  .job {
    height: 15.2rem;
    padding: 3.2rem 4rem;
    margin-bottom: 2.4rem;
    flex-direction: row;
    align-items: center;

    &__img {
      position: relative;
      top: 0;
      left: 0;
      width: 8.8rem;
      height: 8.8rem;
    }

    &__position {
      font-size: 2.2rem;
    }

    &__detail {
      margin-left: 2.4rem;
      justify-content: space-between;
    }

    &__tools {
      margin-left: auto;
    }
  }
}
</style>
