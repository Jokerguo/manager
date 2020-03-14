<template>
  <Layout>
    <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"/>
    <ol v-if="groupList.length>0">
      <li v-for="(group) in groupList" :key="group.title">
        <h3 class="title">{{beautify(group.title)}} <span>￥{{group.total}}</span></h3>
        <ol>
          <li v-for="item in group.items" :key="item.id" class="record">
            <span>{{tagString(item.tags)}}</span>
            <span class="notes">{{item.notes}}</span>
            <span>￥{{item.amount}}</span>
          </li>
        </ol>
      </li>
    </ol>
    <div v-else class="noResult">
      当前没有相关数据
    </div>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Tabs from '@/components/Tabs.vue';
  import recordTypeList from '@/constants/recordTypeList';
  import dayjs from 'dayjs';
  import clone from '@/lib/clone';

  @Component({
    components: {Tabs}
  })
  export default class Statistics extends Vue {
    tagString(tags: Tag[]) {
      return tags.length === 0 ? '无' : tags.map(t => t.name).join('，');
    }

    beautify(string: string) {
      const now = new Date();
      if (dayjs(string).isSame(now, 'day')) {
        return '今天';
      } else if (dayjs(string).isSame(now.valueOf() - 86400 * 1000, 'day')) {
        return '昨天';
      } else if (dayjs(string).isSame(now.valueOf() - 86400 * 2000, 'day')) {
        return '前天';
      } else if (dayjs(string).isSame(now, 'year')) {
        return dayjs(string).format('M-D');
      } else {
        return dayjs(string).format('YYYY-M-D');
      }
    }

    get recordList() {
      return (this.$store.state as RootState).recordList;
    }

    get groupList() {
      const {recordList} = this;
      const newList = clone(recordList).filter(r => r.type === this.type).sort((a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf());
      if (newList.length=== 0)return [];
      type Result = {title: string; total?: number; items: RecordItem[]}[];
      const result: Result= [{title: dayjs(newList[0].createdAt).format('YYYY-M-D'), items: [newList[0]]}];
      for(let i=1; i<newList.length; i++){
        const current = newList[i];
        const last = result[result.length-1];
        if(dayjs(last.title).isSame(dayjs(current.createdAt),'day')){
          last.items.push(current);
        }else{
          result.push({title: dayjs(newList[i].createdAt).format('YYYY-M-D'), items: [current]})
        }
      }
      console.log(result);
      result.forEach(group =>{
        group.total = group.items.reduce((sum,item) => sum+item.amount,0)
      });
      return result;
    }

    beforeCreate() {
      this.$store.commit('fetchRecords');
    }

    type = '-';
    recordTypeList = recordTypeList;
  }
</script>

<style lang="scss" scoped>
  ::v-deep {
    .type-item {
      background: #fff;

      &.selected {
        background: #c4c4c4;

        &::after {
          display: none;
        }
      }
    }

    .interval-item {
      height: 40px;
    }
  }

  %item {
    padding: 0 16px;
    min-height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    @extend %item
  }

  .record {
    @extend %item;
    background: #fff;
  }

  .notes {
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
  .noResult{
    padding: 16px;
    text-align: center;
  }

</style>