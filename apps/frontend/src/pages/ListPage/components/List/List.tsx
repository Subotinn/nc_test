import React, {MouseEventHandler, useCallback, useContext} from 'react';
import {ListContext} from "../../../../stores";

const List = ({data}) => {
  const {actions: {viewDetails}, list} = useContext(ListContext)

  const handleViewClick = useCallback((e) => {
    viewDetails(e.target.dataset.id)
  }, [viewDetails]);

  return (
    <div>
      List
      <ul role="list" className="divide-y divide-gray-100">
        {data.map((item) => {
          return (
            <li className="flex justify-between gap-x-6 py-5" key={item.id}>
              <div className="flex min-w-0 gap-x-4">
                <img className="h-12 w-12 flex-none rounded-full bg-gray-50"
                     src={item.avatar}
                     alt=""/>
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">{item.name}</p>
                  {/*<p className="mt-1 truncate text-xs leading-5 text-gray-500">leslie.alexander@example.com</p>*/}
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <button onClick={handleViewClick} data-id={item.id}>View</button>
              </div>
            </li>
          );
        })}
      </ul>

    </div>
  );
}

export default List;
