<template>
  <Layout>
    <ol class="tags" v-for="tag in tags" :key="tag.id">
      <li><span>{{tag.name}}</span>
        <Icon name="right"/>
      </li>
    </ol>
    <div class="create">
      <button @click="createTag">新增标签</button>
    </div>

    <div></div>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import tagListModel from '@/models/tagListModel';
  import {Component} from 'vue-property-decorator';

  tagListModel.fetch();
  @Component
  export default class Labels extends Vue {
    tags = tagListModel.data;

    createTag() {
      const name = window.prompt('请输入标签名');
      if (name) {
        const message = tagListModel.create(name);
        if (message === 'duplicated') {
          window.alert('标签名重复');
        }else{
          window.alert('添加成功')
        }
      }
    }
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