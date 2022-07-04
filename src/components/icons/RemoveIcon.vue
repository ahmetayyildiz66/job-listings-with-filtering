<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height">
    <path
      :fill="fillColor"
      fill-rule="evenodd"
      d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
    />
  </svg>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
const props = defineProps({
  width: {
    type: Number,
    default: 48,
  },
  height: {
    type: Number,
    default: 48,
  },
  fillColor: {
    type: String,
    default: "fillColor",
  },
});
console.log("props: ", props);
</script>
