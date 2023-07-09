import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import  store  from './store/ReduxStore'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
    {/* <React.StrictMode> */}
    <Routes>
      <Route path='*' element= {<App />} />
    </Routes>
  {/* </React.StrictMode> */}
  </BrowserRouter>
  </Provider>
);