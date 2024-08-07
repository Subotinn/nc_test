import React, {useContext, useMemo, useState} from 'react';
import {ListContext} from "../../../../stores";
import {Label, Listbox, ListboxButton, ListboxOption, ListboxOptions} from '@headlessui/react'
import {CheckIcon, ChevronUpDownIcon} from '@heroicons/react/20/solid'
import {Input} from "../../../../components/Form/Input";
import Select from "../../../../components/Form/Select/Select";
import {Button} from "../../../../components/Form/Button";

const DEFAULT_CATEGORY = {id: 0, title: 'Choose category'};
const Filter = ({onSearch}) => {
  const {categories} = useContext(ListContext);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<{ id: number, title: string }>(DEFAULT_CATEGORY);

  const handleFind = (e) => {
    e.preventDefault();
    onSearch && onSearch({
      search,
      category: category.id
    })
  };

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const categoriesWithEmptyOne = useMemo(() => {
    return [DEFAULT_CATEGORY, ...categories]
  }, [categories])

  return (
    <div className="">
      <form action="#" method="POST" className="">
        <div className="grid grid-cols-3 gap-x-8 gap-y-6 mt-2">
          <div>
            <Input
              id="search"
              name="search"
              onChange={handleSearch}
            />
          </div>
          <div>
            <Select
              options={categoriesWithEmptyOne}
              selectedOption={category}
              onSelect={setCategory}
            />
          </div>
          <div>
            <Button
              type="submit"
              onClick={handleFind}
            >Find</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Filter;
