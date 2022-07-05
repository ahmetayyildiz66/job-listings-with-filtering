<template>
  <header class="header"></header>
</template>

<style lang="scss" scoped>
.header {
  height: 15.6rem;
  background-color: var(--clr-primary);
  background-image: url("../assets/bg-header-mobile.svg");
}

@media only screen and (min-width: 376px) {
  .header {
    background-image: url("../assets/bg-header-desktop.svg");
  }
}
</style>
