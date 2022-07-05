<template>
  <div class="job" :class="{ featured: job.featured }">
    <img class="job__img" :src="require(`@/assets/${job.logo}`)" />
    <div class="job__detail">
      <div class="job__company">
        <span>{{ job.company }}</span>
        <JobLabel v-if="job.new" :new="job.new" label="NEW!"></JobLabel>
        <JobLabel v-if="job.featured" label="FEATURED"></JobLabel>
      </div>
      <h2 class="job__position">{{ job.position }}</h2>
      <div class="job__work-type">
        <span class="job__postedAt">{{ job.postedAt }}</span>
        <span>{{ job.contract }}</span>
        <span>{{ job.location }}</span>
      </div>
    </div>
    <div class="separator"></div>
    <div class="job__tools">
      <JobTool v-for="(tool, index) in allTools" :tool="tool" :key="index" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import JobTool from "./JobTool.vue";
import JobLabel from "./JobLabel.vue";

interface Job {
  id: number;
  company: string;
  contract: string;
  featured: boolean;
  languages: string[];
  level: string;
  location: string;
  logo: string;
  position: string;
  postedAt: string;
  role: string;
  new: boolean;
  tools: string[];
}

const props = defineProps<{ job: Job }>();

const allTools = [
  props.job.role,
  props.job.level,
  ...props.job.tools,
  ...props.job.languages,
];
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
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--clr-primary);

    & > *:not(:last-child) {
      margin-right: 1.5rem;
    }
  }

  &__position {
    margin-top: 2.3rem;
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
  }

  &__work-type {
    margin-top: 2.3rem;
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
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.6rem;
  }
}

.separator {
  height: 1px;
  background-color: var(--clr-separator);
  margin: 2rem 0;
}

.featured {
  border-left: 0.5rem solid var(--clr-primary);
}

@media only screen and (min-width: 376px) {
  .job {
    height: 15.2rem;
    padding: 3.2rem 4rem;
    margin-bottom: 2.4rem;
    flex-direction: row;

    &__img {
      position: relative;
      top: 0;
      left: 0;
      width: 8.8rem;
      height: 8.8rem;
    }

    &__position {
      margin-top: 0.9rem;
      font-size: 2.2rem;
    }

    &__detail {
      margin-left: 2.4rem;
      justify-content: space-between;
    }

    &__work-type {
      margin-top: 0.8rem;
    }

    &__tools {
      display: flex;
      align-items: center;
      margin-left: auto;
    }
  }
}
</style>
