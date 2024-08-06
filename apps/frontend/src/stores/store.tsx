import {useMemo, useState} from "react";

import {ListContext} from "./list";

export const ListProvider = ({children}) => {
  const [list, setList] = useState([]);
  const [selectedId, setSelectedId] = useState<number>(null);

  const listActions = {
    setData: (data) => {
      setList(data)
    },
    viewDetails: (id: number) => {
      setSelectedId(id)
    },
    closeDetails: () => {
      setSelectedId(null)
    }
  };

  const categories = useMemo(() => {
    const items = list.reduce((acc, item) => {
      acc[item.category.id] = item.category;
      return acc;
    }, {});
    
    return Object.values(items)
  }, [list]);

  return (
    <ListContext.Provider value={{
      actions: listActions,
      list: list,
      selectedId,
      categories
    }}>
      {children}
    </ListContext.Provider>
  );
};
