/* eslint-disable fp-jxl/no-nil, fp-jxl/no-unused-expression */
import { Dispatch, SetStateAction } from 'react';
import axios from 'axios';

export const getTodos = (
  setTodos: Dispatch<SetStateAction<TodoItem[]>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
) => () => {
  const fetchData = async () => {
    setLoading(true);

    const res = await axios.get<TodoItem[]>('https://jsonplaceholder.typicode.com/todos');

    setTodos(res.data);
    setLoading(false);
  };

  fetchData();
};

export const getUsers = (
  setUsers: Dispatch<SetStateAction<User[]>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
) => () => {
  const fetchData = async () => {
    setLoading(true);

    const res = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');

    setUsers(res.data);
    setLoading(false);
  };

  fetchData();
};
