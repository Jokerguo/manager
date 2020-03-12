<template>
  <Layout class-prefix="layout">
    <NumberPad @update:value="onUpdateAmounts" @submit="saveRecord"/>
    <Types :value.sync="record.type" />
    <Notes file-name="备注" @update:value="onUpdateNotes" place-holder="请输入备注"/>
    <Tags :data-source.sync="tag" @update:value="onUpdateTags"/>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Types from '@/components/Money/Types.vue';
  import Notes from '@/components/Money/Notes.vue';
  import Tags from '@/components/Money/Tags.vue';
  import {Component, Watch} from 'vue-property-decorator';
  import recordListModel from '@/models/recordListModel.ts'
  import tagListModel from '@/models/tagListModel';
  const tagList = tagListModel.fetch();

  @Component({
    components: {Tags, Notes, Types, NumberPad},
  })
  export default class Money extends Vue {
    tag = tagList;
    recordList = recordListModel.fetch();
    record: RecordItem = {
      tags : [], notes : '', type : '-',amounts : 0
    };

    onUpdateTags(value: string[]) {
      this.record.tags = value;
    }

    onUpdateNotes(value: string) {
      this.record.notes = value;
    }

    onUpdateAmounts(value: string){
      this.record.amounts= parseFloat(value);
    }
    saveRecord(){
      const newRecord: RecordItem = recordListModel.clone(this.recordList);
      newRecord.createdAt = new Date();
      console.log(1);
      this.recordList.push(newRecord);
    }

    @Watch('recordList')
    onRecordListChange(){
      recordListModel.save(this.recordList);
    }
  }
</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }
</style>
