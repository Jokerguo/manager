<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input type="text" placeholder="在这里添加备注" v-model="value">
    </label>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Watch} from 'vue-property-decorator';

@Component
  export default class Notes extends Vue {
    value = '';
    @Watch('value')
    onUpdateValue(){
      this.$emit('update:value',this.value)
    }
  }
</script>

<style lang="scss" scoped>
  .notes {
    background: #f5f5f5;
    display: flex;
    font-size: 14px;
    padding: 0 16px;
    align-items: center;

    > .name {
      padding-right: 16px;
    }

    input {
      padding: 16px 0;
      flex-grow: 1;
      background: transparent;
      border: none;
    }
  }
</style>