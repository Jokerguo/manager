type RecordItem = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
  createdAt?: Date;
}

type Data = {
  id: string;
  name: string;
}

type TagListModel = {
  data: Data[];
  fetch: () => Data[];
  create: (name: string) => 'success' | 'duplicated';
  update: (id: string, name: string) => 'success' | 'duplicated' | 'not found';
  remove: (id: string) => boolean;
  save: () => void;
}

interface Window {
    tagList: Data[];
}
