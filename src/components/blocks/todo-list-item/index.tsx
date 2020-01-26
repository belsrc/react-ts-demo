import './styles.scss';

import React, { useEffect, FunctionComponent, ChangeEvent } from 'react';
import UserDisplay from 'elements/user-display';

interface TodoListItemProps {
  todo: TodoItem;
  user: User;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TodoListItem: FunctionComponent<TodoListItemProps> = ({ todo, user, onChange }) => {
  useEffect(() => console.log('New todo item'), [todo]);

  return (
    <li className='todo-item'>
      <header>
        <input type='checkbox' checked={ !!todo.completed } onChange={ onChange } />
        <h5>{ todo.title }</h5>
      </header>
      <UserDisplay username={ user ? user.username : '' } email={ user ? user.email : '' } />
    </li>
  );
};

export default TodoListItem;
