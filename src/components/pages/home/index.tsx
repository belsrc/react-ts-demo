import './styles.scss';

import React, {
  useState, useEffect, useMemo, FunctionComponent, ChangeEvent,
} from 'react';
import { Helmet } from 'react-helmet';
import { getTodos, getUsers } from './side-effect';
import Loader from 'elements/loader';
import TodoListItem from 'blocks/todo-list-item';

interface HomeProps {}

const computeCount = (todos: TodoItem[]) => () => Array.isArray(todos) ? todos.length : 0;

const getUser = (item: TodoItem, users: User[]) => users.find(x => x.id === item.userId);

const Home: FunctionComponent<HomeProps> = () => {
  const [ loading, setLoading ] = useState(false);
  const [ todos, setTodos ] = useState<TodoItem[]>([]);
  const [ users, setUsers ] = useState<User[]>([]);

  useEffect(getUsers(setUsers, setLoading), []);
  useEffect(getTodos(setTodos, setLoading), []);

  const counter = computeCount(todos);
  const count = useMemo(counter, [ todos, counter ]);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log('do something with event.target.value');
  };

  return (
    <div className='home'>
      <Helmet>
        <title>Todo</title>
        <meta name='description' content='Some Todo List' />
      </Helmet>
      <main className='home__content'>
        { loading ? <Loader /> : null }
        <h1>Todo List ({ count || 0 })</h1>
        <ul>
          { todos.map(x =>
            <TodoListItem key={ x.id } todo={ x } user={ getUser(x, users) } onChange={ handleChange } />) }
        </ul>
      </main>
    </div>
  );
};

export default Home;
