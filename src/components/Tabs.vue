<template>
  <ul class="tabs">
    <li v-for="item in dataSource" :key="item.value"
        @click="select(item)" :class="{'selected': item.value === value,[classPrefix+ '-item'] : classPrefix}"
    >{{item.text}}
    </li>
  </ul>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  type DataSourceItem = {
    text: string;
    value: string;
  }
  @Component
  export default class Tabs extends Vue {
    @Prop({required: true, type: Array}) dataSource!: DataSourceItem;
    @Prop(String) readonly value!: string;
    @Prop(String) readonly classPrefix?: string;

    select(item: DataSourceItem) {
      this.$emit('update:value', item.value);
    }
  }
</script>

<style lang="scss" scoped>
  .tabs {
    background: #c4c4c4;
    display: flex;
    font-size: 24px;

    li {
      width: 50%;
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      &.selected {
        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          background: #333;
          width: 100%;
          height: 4px;
        }
      }
    }
  }

</style>