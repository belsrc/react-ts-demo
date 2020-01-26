import './styles.scss';

import React, { FunctionComponent } from 'react';

interface LoaderProps {}

const Loader: FunctionComponent<LoaderProps> = () =>
  <div className='loader__background'>
    <div className='loader'>
      <div className='loader__atom-1'></div>
      <div className='loader__atom-2'></div>
      <div className='loader__atom-3'></div>
    </div>
  </div>

;

export default Loader;
