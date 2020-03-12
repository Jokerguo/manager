import clone from '@/lib/clone';

const localStorageKeyName = 'recordList';
const recordListModel = {
  data : [] as RecordItem[],
  create(record: RecordItem){
    const newRecord = clone(record);
    newRecord.createdAt = new Date();
    this.data.push(newRecord);
    this.save();
  },
  fetch() {
    return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};
export default recordListModel;
