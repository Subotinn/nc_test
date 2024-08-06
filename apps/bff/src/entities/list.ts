export interface ICategoryItem {
  id: number;
  title: string;
}

export interface IListItem {
  id: string;
  name: string;
  category: ICategoryItem;
  avatar: string;
}


export interface IRawListResponse {
  total: number;
  data: IRawListItem[];
}

export interface IRawCategoryItem extends ICategoryItem {
}

export interface IRawListItem {
  id: string;
  name: string;
  category: IRawCategoryItem;
  avatar: string;
}
