import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/phone-book/store'
import { Provider } from 'react-redux';

import { initialStore } from './store';
import Main from './Main';

const App = () => {
  return (
    <div className="ui container">
      <Provider store={store}>
        <Main />
      </Provider>
    </div>
  );
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
);

