<template>
  <nav>
    <router-link class="item" to="/labels" active-class="selected">
      <Icon name="label"/>
      标签
    </router-link>
    <router-link class="item" to="/money" active-class="selected">
      <Icon name="money"/>
      记账
    </router-link>
    <router-link class="item" to="/statistics" active-class="selected">
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
  @import "~@/assets/style/helper.scss";
  nav {
    display: flex;
    flex-direction: row;
    font-size: 12px;
    font-weight: bold;
    > .item {
      padding: 5px 0;
      width: 33.3333%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      @extend %outerShadow;

      > .icon{
        width: 30px;
        height: 30px;
      }
    }
    > .item.selected{
      /*background-color:#e8e8e8 ;*/
      /*color: #f00;*/
      background: #757171;
      color: white;
    }
  }
</style>