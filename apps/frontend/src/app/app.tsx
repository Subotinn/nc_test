import {ListPage} from "../pages/ListPage";
import {useContext} from "react";
import {ListContext} from "../stores";
import {DetailsPage} from "../pages/DetailsPage";

export function App() {
  const {selectedId} = useContext(ListContext)

  return (
    <div>
      {selectedId ? (
        <DetailsPage/>
      ) : (
        <ListPage/>
      )}
    </div>
  );
}

export default App;
