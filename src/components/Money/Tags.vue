<template>
  <div class="tags">
    <div class="new">
      <button @click="create">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="tag in tagList" :key="tag.id"
          :class="{selected: selectedTags.indexOf(tag)>=0}"
          @click="toggle(tag)">{{tag.name}}
      </li>
    </ul>
  </div>

</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Tags extends Vue {
    selectedTags: string[] = [];

    get tagList() {
      return this.$store.state.tagList;
    }

    beforeCreate() {
      this.$store.commit('fetchTags');
    }

    toggle(tag: string) {
      const index = this.selectedTags.indexOf(tag);
      if (index >= 0) {
        this.selectedTags.splice(index, 1);
      } else {
        this.selectedTags.push(tag);
      }
      this.$emit('update:value', this.selectedTags);
    }

    create() {
      const name = window.prompt('请输入标签名');
      if (!name) {return;}
      this.$store.commit('createTag', name);
    }

  }
</script>

<style lang="scss" scoped>
  .tags {
    background: white;
    font-size: 14px;
    padding: 16px;
    display: flex;
    flex-direction: column-reverse;
    flex-grow: 1;

    > .current {
      display: flex;
      flex-wrap: wrap;

      > li {
        $h: 24px;
        $b: #d9d9d9;
        background: $b;
        height: $h;
        line-height: $h;
        border-radius: $h/2;
        padding: 0 16px;
        margin-right: 10px;
        margin-top: 4px;

        &.selected {
          background: darken($b, 40%);
          color: #fff;
        }

      }
    }

    > .new {
      padding-top: 16px;

      button {
        border: none;
        border-bottom: 1px solid black;
        padding: 0 3px;
        color: #999;
        background: transparent;
      }
    }
  }
</style>