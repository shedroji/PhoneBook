import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { initialStore } from './store';
import Main from './Main';

const store = initialStore();

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

