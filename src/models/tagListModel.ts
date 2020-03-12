const localStorageKeyName = 'tagList';
type Data  = {
  id: string;
  name: string;
}
type TagListModel = {
  data: Data[];
  fetch: () => Data[];
  create: (name: string) => 'success' | 'duplicated';
  save: () => void;
}
const tagListModel: TagListModel = {
  data: [],
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return this.data;
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  },
  create(name) {
    //this.data = [{id:1,name:1},{id:2,name:2}]
    const names = this.data.map(item => item.name);
    if(names.indexOf(name)>=0){return 'duplicated'}
    this.data.push({id: name , name:name});
    this.save();
    return 'success'
  }

};
export default tagListModel;