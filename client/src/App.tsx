import * as React from 'react';
import { Provider } from 'overmind-react';
import MainAppContainer from './#/#/Main';
import { overmind } from './@state';

export default function App() {
  return (
    <Provider value={overmind}>
      <React.StrictMode>
        <MainAppContainer />
      </React.StrictMode>
    </Provider>
  );
}
