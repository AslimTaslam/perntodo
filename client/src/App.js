import {Fragment} from 'react';
import SearchTodo from './components/searchTodo/SearchTodo.js';
import ListTodos from './components/listTodos/ListTodos.js';

const App = () => {
  return (
    <Fragment>
      <h1 className="text-center mt-3">Todo app</h1>
      <SearchTodo/>
      <ListTodos/>
    </Fragment>
  );
}

export default App;
