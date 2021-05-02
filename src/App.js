import "./App.css";
import { useState } from "react";
import CakeContainer from './components/CakeContainer';
import {Provider} from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer'
import Temp from './components/Temp';

function App() {

  return (
    <Provider store={store}>
    <div className="App">
      <HooksCakeContainer />
      <IceCreamContainer />
      <Temp />
    </div>
    </Provider>
  );
}

export default App;
