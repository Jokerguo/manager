const localStorageKeyName = 'tagList';

const tagListModel: TagListModel = {
  data: [],
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return this.data;
  },
  create(name) {
    //this.data = [{id:1,name:1},{id:2,name:2}]
    const names = this.data.map(item => item.name);
    if (names.indexOf(name) >= 0) {return 'duplicated';}
    this.data.push({id: name, name: name});
    this.save();
    return 'success';
  },
  // update(id, name) {
  //   const idList = this.data.map(item => item.id);
  //   if(idList.indexOf(id)>=0){
  //
  //   }else{
  //     return 'not found'
  //   }
  // },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  },
};
export default tagListModel;