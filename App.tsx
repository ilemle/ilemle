
import React from 'react';
import { Provider } from 'react-redux';

import { RootAppNavigationStack } from './src/navigation/navigation';
import { store } from './src/store/store';


function App(): JSX.Element {

  return (
    <React.StrictMode>
      <Provider store={store}>
        <RootAppNavigationStack />
      </Provider>
    </React.StrictMode>
  );
}

export default App;
