
import React from 'react';
import { Provider } from 'react-redux';

import { RootAppNavigationStack } from './src/navigation/navigation';
import { persistor, store } from './src/store/store';
import { PersistGate } from 'redux-persist/integration/react';


function App(): JSX.Element {

  return (
    // <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootAppNavigationStack />
      </PersistGate>
    </Provider>
    // </React.StrictMode>
  );
}

export default App;
