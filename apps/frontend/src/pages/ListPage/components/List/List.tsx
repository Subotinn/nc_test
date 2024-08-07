import React, {MouseEventHandler, useCallback, useContext} from 'react';
import {ListContext} from "../../../../stores";

const List = ({data}) => {
  const {actions: {viewDetails}, list} = useContext(ListContext)

  const handleViewClick = useCallback((e) => {
    viewDetails(e.target.dataset.id)
  }, [viewDetails]);

  return (
    <div>
      <ul role="list" className="divide-y divide-gray-100">
        {data.map((item) => {
          return (
            <li className="flex justify-between items-center gap-x-6 py-5" key={item.id}>
              <div className="flex min-w-0 gap-x-4">
                <img className="h-12 w-12 flex-none rounded-full bg-gray-50"
                     src={item.avatar}
                     alt=""/>
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">{item.name}</p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  onClick={handleViewClick} data-id={item.id}
                >View Profile
                </button>
              </div>
            </li>
          );
        })}
      </ul>

    </div>
  )
    ;
}

export default List;
