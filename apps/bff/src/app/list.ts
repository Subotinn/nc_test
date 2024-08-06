import axios from "axios";
import {IListItem, IRawListResponse} from "../entities/list";

export async function getListData(filters) {
  let filteredItems = await axios.post("http://test.mock.api/api/list", filters)
    .then((response) => {
      return (response.data as IRawListResponse).data.map((rawItem) => {
        return {
          id: rawItem.id,
          name: rawItem.name,
          avatar: rawItem.avatar,
          category: rawItem.category
        } as IListItem;
      });
    }, (reason) => {
      return Promise.reject(reason);
    });

  if (Number(filters.category)) {
    filteredItems = filteredItems.filter(item => item.category.id == filters.category)
  }

  if (filters.search) {
    filteredItems = filteredItems.filter(item => item.name.toLowerCase().includes(filters.search.toLowerCase()))
  }

  return {
    total: filteredItems.length,
    items: filteredItems,
  }
}
