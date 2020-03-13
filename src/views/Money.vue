<template>
  <Layout class-prefix="layout">
    <NumberPad @update:value="onUpdateAmounts" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <div class="from-wrapper">
      <FromItem file-name="备注" @update:value="onUpdateNotes" place-holder="请输入备注"/>
    </div>
    <Tags/>
  </Layout>

</template>

<script lang="ts">
  import Vue from 'vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Types from '@/components/Money/Types.vue';
  import FromItem from '@/components/Money/FormItem.vue';
  import Tags from '@/components/Money/Tags.vue';
  import {Component} from 'vue-property-decorator';
  import oldStore from '@/store/index2';

    @Component({
      components: {Tags, FromItem, Types, NumberPad},
      computed:{
        count(){
          return this.$store.state.count
        }
      }
    })
    export default class Money extends Vue {
    recordList = oldStore.recordList;
    record: RecordItem = {
      tags: [], notes: '', type: '-', amount: 0
    };

    onUpdateNotes(value: string) {
      this.record.notes = value;
    }

    onUpdateAmounts(value: string) {
      this.record.amount = parseFloat(value);
    }

    saveRecord() {
      oldStore.createRecord(this.record);
    }

  }
</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }
  .from-wrapper{
    padding: 12px 0;
  }
</style>
