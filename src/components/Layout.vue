<template>
  <div class="nav-wrapper">
    <div class="nav-content">
      <slot/>

    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Layout'
  };
</script>

<style lang="scss" scoped>
  .nav-wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .nav-content {
    flex-grow: 1;
    overflow: auto;
  }
</style>