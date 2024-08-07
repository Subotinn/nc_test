import React, {useContext, useEffect, useState} from 'react';
import {List} from "./components/List";
import {Filter} from "./components/Filter";
import {getListData} from "../../api/list";
import {ListContext} from "../../stores";
import {EmptyList} from "../../components/EmptyStates";
import {Spinner} from "../../components/LoadingStates";

const ListPage = () => {
  const {actions: {setData}, list} = useContext(ListContext)
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async ({search = '', category = 0} = {}) => {
    setIsLoading(true);

    const data = await getListData({
      filters: {
        search,
        category
      }
    });

    if (data && data.total) {
      setData(data.items)
    } else {
      setData([])
    }

    setIsLoading(false);

    return [];
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div className="min-h-full">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">List Items</h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div>
            <Filter onSearch={fetchData}/>
          </div>
          <div className="mt-4">
            {isLoading && <Spinner/>}
            {(!isLoading && list.length) && (<List data={list}/>)}
            {!isLoading && !list.length && (<EmptyList/>)}
          </div>
        </div>
      </main>
    </div>
  );
}

export default ListPage;
