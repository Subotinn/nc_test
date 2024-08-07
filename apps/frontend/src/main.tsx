import {StrictMode} from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './pages/MainPage/MainPage';
import {ListProvider} from "./stores";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <ListProvider>
      <App/>
    </ListProvider>
  </StrictMode>
);
