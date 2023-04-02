import SearchTodo from './SearchTodo.js';
import FilterTodo from './FilterTodo.js';
import CreateTodo from './CreateTodo.js';
import ListTodos from './ListTodos.js';
import ErrorBoundary from './ErrorBoundary.js';
import { TodosContextProvider } from '../context/TodosContext.js';

const App = () => (
    <TodosContextProvider>
      <ErrorBoundary>
        <div className='container'>
          <h1 className='text-center mt-3'>Todo app</h1>
          <SearchTodo />
          <div>
            <FilterTodo />
            <CreateTodo />
          </div>
          <ErrorBoundary>
            <ListTodos />
          </ErrorBoundary>
        </div>
      </ErrorBoundary>
    </TodosContextProvider>
  );

export default App;
