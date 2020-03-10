<template>
  <div class="tags">
    <div class="new">
      <button>新增标签</button>
    </div>
    <ul class="current">
      <li v-for="tag in dataSource" :key="tag" @click="toggle(tag)" :class="{toggle : selectTags.indexOf(tag)>=0}">{{tag}}</li>
    </ul>
  </div>

</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component,Prop} from 'vue-property-decorator';

  @Component
  export default class Tags extends Vue{
    @Prop(Array) dataSource: string[] | undefined;
    selectTags: string[] = [];
    toggle(tag: string){
      const index = this.selectTags.indexOf(tag);
      if(index >=0){
        this.selectTags.splice(index,1)
      }else{
        this.selectTags.push(tag)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tags {
    font-size: 14px;
    padding: 16px;
    display: flex;
    flex-direction: column-reverse;
    flex-grow: 1;
    > .current {
      display: flex;
      flex-wrap: wrap;
      > li {
        $h : 24px;
        $b : #d9d9d9;
        background: $b;
        height: $h;
        line-height: $h;
        border-radius: $h/2;
        padding: 0 16px;
        margin-right: 10px;
        margin-top: 4px;
        &.selected{
          background: darken($b,40%);
          color: #fff;
        }

      }
    }
    > .new{
      padding-top: 16px;

      button{
        border: none;
        border-bottom: 1px solid black;
        padding: 0 3px;
        color: #999;
        background: transparent;
      }
    }
  }
</style>