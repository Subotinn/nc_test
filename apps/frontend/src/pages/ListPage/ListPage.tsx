import React from 'react';
import {List} from "./components/List";
import {Filter} from "./components/Filter";

function ListPage(props) {
  return (
    <div className="min-h-full">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div>
            <Filter/>
          </div>
          <div className="mt-4">
            <List/>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ListPage;
