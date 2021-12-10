import React from 'react';
import { TwoCol, Form, Player } from 'threekit/components';
//import {Dropdown} from '../threekit/react/components/InputComponents/Dropdown';

import AppComponent from './AppComponent';


const App = () => {
  return (
    <TwoCol leftSize="auto" rightSize="400px" width="1200px">
      <div>
        <Player />
      </div>
      <div>
        <AppComponent/>
      </div>
    </TwoCol>
  );
};

export default App;