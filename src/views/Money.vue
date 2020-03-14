<template>
  <Layout class-prefix="layout">
    <NumberPad @update:value="onUpdateAmounts" @submit="saveRecord"/>
    <Tabs :data-source="recordTypeList" :value.sync="record.type"/>
    <div class="from-wrapper">
      <FromItem file-name="备注" :value.sync="record.notes" place-holder="请输入备注"/>
    </div>
    <Tags @update:value="record.tags=$event"/>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import FromItem from '@/components/Money/FormItem.vue';
  import Tags from '@/components/Money/Tags.vue';
  import Tabs from '@/components/Tabs.vue';
  import {Component} from 'vue-property-decorator';
  import recordTypeList from '@/constants/recordTypeList';

  @Component({
    components: {Tags, FromItem, NumberPad,Tabs}
  })
  export default class Money extends Vue {
    get recordList() {
      return this.$store.state.recordList;
    }
    record: RecordItem = {
      tags: [], notes: '', type: '-', amount: 0
    };

    recordTypeList = recordTypeList;

    created() {
      this.$store.commit('fetchRecords');
    }

    onUpdateAmounts(value: string) {
      this.record.amount = parseFloat(value);
    }

    saveRecord() {
      if(!this.record.tags || this.record.tags.length === 0){
        return window.alert('请选择一个标签');
      }
      this.$store.commit('createRecord', this.record);
      if(this.$store.state.createRecordError === null){
        window.alert('已保存');
        this.record.notes = '';
      }
    }

  }
</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }

  .from-wrapper {
    padding: 12px 0;
  }
</style>
