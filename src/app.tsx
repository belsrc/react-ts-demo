import './styles/base.scss';

import React, { FunctionComponent } from 'react';
import { RouterView } from './router';

interface AppProps {}

const App: FunctionComponent<AppProps> = () =>
  <div className='index'>
    <RouterView />
  </div>

;

export default App;
