<template>
  <layout>
    <div class="navBar">
      <Icon class="leftIcon" name="left"/>
      <span>编辑标签</span>
    </div>
    <div class="from-wrapper">
      <FromItem class="title" file-name="标签名" place-holder="请输入标签名"
                :value="tag.name"
                @update:value="updateTag"
      />
    </div>
    <div class="button-wrapper">
      <Button>删除标签</Button>
    </div>
  </layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import tagListModel from '@/models/tagListModel';
  import FromItem from '@/components/Money/FormItem.vue';
  import Button from '@/components/Button.vue';

  @Component({
    components: {Button, FromItem}
  })
  export default class EditLabel extends Vue {
    tag?: Data = undefined;
    created() {
      const id = this.$route.params.id;
      tagListModel.fetch();
      const tags = tagListModel.data;
      const tag = tags.filter(t => t.id === id)[0];
      if (tag) {
        this.tag = tag;
      } else {
        this.$router.replace('/404');
      }
    }
    // updateTag(value: string){
    //   // tagListModel.update(value: string);
    // }
  }
</script>

<style lang="scss" scoped>
  .navBar {
    font-size: 16px;
    min-height: 48px;
    line-height: 48px;
    background: #fff;
    text-align: center;
    position: relative;

    > .leftIcon {
      position: absolute;
      top: 16px;
      left: 24px;
    }
  }

  .from-wrapper {
    background: white;
    margin-top: 8px;
    padding: 0 12px;
  }
  .button-wrapper{
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
</style>