import tagListStore from '@/store/tagListStore.ts';
import recordStore from '@/store/recordStore.ts';

const store = {
  ...recordStore,
  ...tagListStore
};
export default store;