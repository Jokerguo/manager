<template>
  <div>
    <label class="formItem">
      <span class="name">{{fileName}}</span>
      <input type="text" :placeholder="placeHolder" :value="value" @input="onUpdateValue($event.target.value)">
    </label>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

@Component
  export default class FromItem extends Vue {
    @Prop({default : ''}) readonly value!: string;
    @Prop({required:true}) fileName!: string;
    @Prop() placeHolder?: string;
    onUpdateValue(value: string){
      this.$emit('update:value',value);

    }
  }
</script>

<style lang="scss" scoped>
  .formItem {
    display: flex;
    font-size: 14px;
    padding: 0 16px;
    align-items: center;

    > .name {
      padding-right: 16px;
    }

    input {
      height: 40px;
      padding: 16px 0;
      flex-grow: 1;
      background: transparent;
      border: none;
    }
  }
</style>