type RootState = {
  recordList:  RecordItem[];
  tagList:  Tag[];
  currentTag?: Tag;
}

type RecordItem = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
  createdAt?: string;
}

type Tag = {
  id: string;
  name: string;
}

type TagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  create: (name: string) => 'success' | 'duplicated';
  update: (id: string, name: string) => 'success' | 'duplicated' | 'not found';
  remove: (id: string) => boolean;
  save: () => void;
}

interface Window {
  store: {
    recordList: RecordItem[];
    createRecord: (record: RecordItem) => void;
    tagList: Tag[];
    createTag: (name: string) => void;
    removeTag: (id: string) => boolean;
    updateTag: TagListModel['update'];
    findTag: (id: string) => Tag;
  };
}
