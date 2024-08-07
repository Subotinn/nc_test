import {ListPage} from "../ListPage";
import {useContext} from "react";
import {ListContext} from "../../stores";
import {DetailsPage} from "../DetailsPage";

const MainPage = () => {
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

export default MainPage;
