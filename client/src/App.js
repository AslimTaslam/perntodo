import { Fragment } from 'react';
import SearchTodo from './components/SearchTodo.js';
import FilterTodo from './components/FilterTodo.js';
import CreateTodo from './components/CreateTodo.js';
import ListTodos from './components/ListTodos.js';
import ErrorBoundry from './components/ErrorBoundry.js';
import { TodosContextProvider } from './context/TodosContext.js';

const App = () => { 
  return (
    <TodosContextProvider>
      <ErrorBoundry>
        <div className="container">
          <h1 className="text-center mt-3">Todo app</h1>
          <SearchTodo/>
          <div>
            <FilterTodo/>
	    <CreateTodo/>
          </div>
	  <ErrorBoundry>
            <ListTodos/>
	  </ErrorBoundry>
        </div>
      </ErrorBoundry>
    </TodosContextProvider>
  );
}

export default App;
