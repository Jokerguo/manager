<template>
  <div>
    <label class="formItem">
      <span class="name">{{fileName}}</span>
      <input type="text" :placeholder="this.placeHolder" :value="value" @input="onUpdateValue">
    </label>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop, Watch} from 'vue-property-decorator';

@Component
  export default class FromItem extends Vue {
    @Prop({default : ''}) value!: string;
    @Prop({required:true}) fileName!: string;
    @Prop() placeHolder?: string;
    @Watch('value')
    onUpdateValue(){
      this.$emit('update:value',this.value)
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