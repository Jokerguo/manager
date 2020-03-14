<template>
  <layout>
    <div class="navBar">
      <Icon class="leftIcon" name="left" @click="goBack"/>
      <span>编辑标签</span>
    </div>
    <div class="from-wrapper">
      <FromItem class="title" file-name="标签名" place-holder="请输入标签名"
                :value="tag.name"
                @update:value="update"
      />
    </div>
    <div class="button-wrapper">
      <Button @click="remove">删除标签</Button>
    </div>
  </layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import FromItem from '@/components/Money/FormItem.vue';
  import Button from '@/components/Button.vue';

  @Component({
    components: {Button, FromItem},
  })
  export default class EditLabel extends Vue {
    get tag() {
      return this.$store.state.currentTag;
    }

    created() {
      this.$store.commit('fetchTags');
      this.$store.commit('setCurrentTag', this.$route.params.id);
      if (!this.tag) {
        this.$router.replace('/404');
      }
    }

    update(name: string) {
      if (this.tag) {
        this.$store.commit('updateTag',{id: this.tag.id ,name : name});
      }
    }

    remove() {
      if (this.tag) {
        this.$store.commit('removeTag',this.tag.id)
      }
    }

    goBack() {
      this.$router.back();
    }
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

  .button-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
</style>