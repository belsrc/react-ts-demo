interface TodoItem {
  userId: string;
  id: string;
  title: string;
  completed: boolean;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: Address;
  company: Company;
}

interface RootState {
  todoItems: TodoItem[];
}

interface UserState {
  users: User[];
}
