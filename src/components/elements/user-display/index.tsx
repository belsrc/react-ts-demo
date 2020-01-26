import './styles.scss';

import React, { FunctionComponent } from 'react';

interface UserDisplayProps {
  username: string;
  email: string;
}

const UserDisplay: FunctionComponent<UserDisplayProps> = ({ username, email }) =>
  <div className='user-display'>
    { username } <span>&lt;{ email }&gt;</span>
  </div>

;

export default UserDisplay;
