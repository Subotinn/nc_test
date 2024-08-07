import {useMemo, useState} from "react";

import {ListContext} from "./list";

export const ListProvider = ({children}) => {
  const [list, setList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [selectedId, setSelectedId] = useState<number>(null);

  const listActions = {
    setData: (data) => {
      setList(data)

      // Better to get list of available categories from BFF, with additional request.
      if (!categoriesList.length) {
        const items = data.reduce((acc, item) => {
          acc[item.category.id] = item.category;
          return acc;
        }, {});

        setCategoriesList(Object.values(items));
      }
    },
    viewDetails: (id: number) => {
      setSelectedId(id)
    },
    closeDetails: () => {
      setSelectedId(null)
    }
  };

  return (
    <ListContext.Provider value={{
      actions: listActions,
      list: list,
      selectedId,
      categories: categoriesList
    }}>
      {children}
    </ListContext.Provider>
  );
};
