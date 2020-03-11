<template>
  <Layout>
    <ol class="tags">
      <li><span>衣</span>
        <Icon name="right"/>
      </li>
    </ol>
    <div class="create">
      <button>新增标签</button>
    </div>

    <div></div>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import tagListModel from '@/models/tagListModel';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Labels extends Vue {
    tags = tagListModel.fetch();

  }
</script>

<style lang="scss" scoped>
  .tags {
    background: #fff;
    font-size: 16px;
    padding-left: 16px;

    > li {
      min-height: 44px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #e6e6e6;

      > .icon {
        margin-right: 16px;
        color: #999;
        width: 22px;
        height: 22px;
      }
    }
  }

  .create {
    font-size: 17px;
    text-align: center;
    padding-top: 44px;

    > button {
      padding: 5px 4px;
      border: none;
      border-radius: 10%;
      background: #767676;
    }
  }
</style>