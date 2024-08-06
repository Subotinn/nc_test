import React, {useContext, useMemo, useState} from 'react';
import {ListContext} from "../../../../stores";

const Filter = ({onSearch}) => {
  const {categories} = useContext(ListContext);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState(0);

  const handleFind = (e) => {
    e.preventDefault();
    onSearch && onSearch({
      search,
      category
    })
  };

  const handleSelectCategory = (e) => {
    setCategory(e.target.value)
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className="">
      <form action="#" method="POST" className="">
        <p>Filters</p>
        <div className="grid grid-cols-3 gap-x-8 gap-y-6 mt-2">
          <div>
            <input
              id="first-name"
              name="first-name"
              type="text"
              autoComplete="given-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleSearch}
            />
          </div>
          <div>
            <select onChange={handleSelectCategory}>
              <option value={0}>Select Category</option>
              {categories.map(({id, title}) => {
                return (
                  <option value={id} key={id}>{title}</option>
                );
              })}
            </select>
          </div>
          <div>
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleFind}
            >
              Find
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Filter;
