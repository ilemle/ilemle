
import React, { useEffect } from 'react';

import { Provider } from 'react-redux';

import { RootAppNavigationStack } from './src/navigation/navigation';
import { store } from './src/store/store';
import { Appearance } from 'react-native';
import { useActions, useTypedSelector } from './src/hooks';
import { WrapperAppScren } from './WrapperAppScreen';

function App(): JSX.Element {

  // const { changeAppTheme } = useActions()

  // useEffect(() => {
  //   const coloTheme = Appearance.getColorScheme()
  //   console.log('coloTheme', coloTheme);
  //   changeAppTheme(coloTheme)
  // }, [])

  return (
    <React.StrictMode>
      <Provider store={store}>
        {/* <WrapperAppScren> */}
          <RootAppNavigationStack />
        {/* </WrapperAppScren> */}
      </Provider>
    </React.StrictMode>
  );
}

export default App;
