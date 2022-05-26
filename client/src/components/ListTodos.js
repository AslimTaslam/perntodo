import { Fragment, useEffect, useContext } from 'react';
import { getTodos } from '../apis/TodoList.js';
import { TodosContext } from '../context/TodosContext';
import ItemTodo from './ItemTodo.js';

const ListTodos = (props) => {
  const { todos, setTodos, filter, filterTodos, searchTodo, searchItem } = useContext(TodosContext);

  const fetchData = async () => {
    const data = await getTodos();
    setTodos(data.data);
  }

  useEffect(() => {
    fetchData();
  }, []);
  
  const visibleTodos = searchTodo(filterTodos(todos, filter), searchItem);
  
  return (
    <Fragment>
      <ul className="list-group mt-2">
	{ 
          visibleTodos.map((todo) => (
	    <ItemTodo
	      todo={todo}
	      key={todo.id_todo}/>
	  ))
	}
      </ul> 
    </Fragment>
  );
}

export default ListTodos;
