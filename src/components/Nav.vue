<template>
  <nav>
    <router-link class="item" to="/money">
      <Icon name="money"/>
      记账
    </router-link>
    <router-link class="item" to="/labels">
      <Icon name="labels"/>
      标签
    </router-link>
    <router-link class="item" to="/statistics">
      <Icon name="statistics"/>
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">
  export default {
    name: 'Nav',
  };
</script>

<style lang="scss" scoped>
  nav {
    display: flex;
    flex-direction: row;
    font-size: 12px;
    .item {
      padding: 5px 0;
      width: 33.3333%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 2px rgba(0,0,0,0.2);

      .icon{
        width: 30px;
        height: 30px;
      }

    }
  }
</style>