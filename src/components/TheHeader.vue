<template>
  <header class="header"></header>
</template>

<script lang="ts" setup>
console.log("hey");
</script>

<style lang="scss" scoped>
.header {
  height: 15.6rem;
  background-color: red;
  // background-image: url("../assets/bg-header-desktop.svg");
  // background-repeat: no-repeat;
  // background-color: var(--clr-primary);
}

@media only screen and (min-width: 376px) {
  .header {
    background-color: blue;
  }
}
</style>
