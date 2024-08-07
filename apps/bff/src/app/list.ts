import axios from "axios";
import {IListItem, IRawListResponse} from "../entities/list";
import {formatSalary} from "../helpers/formatters";

export async function getListData(filters) {
  let filteredItems = await axios.post("http://test.mock.api/api/list", filters)
    .then((response) => {
      return (response.data as IRawListResponse).data.map(({
                                                             id,
                                                             name,
                                                             email,
                                                             avatar,
                                                             category,
                                                             salary,
                                                             description
                                                           }) => {
        return {
          id,
          name,
          email,
          avatar,
          category,
          salary: formatSalary(salary),
          description,
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
