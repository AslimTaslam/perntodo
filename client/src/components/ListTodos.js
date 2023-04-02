import { useState, useEffect, useContext, useCallback } from 'react';
import { getTodos } from '../services/TodoList.js';
import { TodosContext } from '../context/TodosContext';
import ItemTodo from './ItemTodo.js';
import Loader from './Loader.js';

const ListTodos = () => {
  const { todos, setTodos, filter, filterTodos, searchTodo, searchItem } =
    useContext(TodosContext);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const data = await getTodos();
    if (data.data) {
      setTodos(data.data);
      setLoading(false);
    }
  }, [setTodos]);

  useEffect(() => {
    console.log('effect');
    fetchData();
  }, [fetchData]);

  const visibleTodos = searchTodo(filterTodos(todos, filter), searchItem);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <ul className='list-group mt-2'>
        {visibleTodos.map((todo) => (
          <ItemTodo
            todo={todo}
            key={todo.id_todo}
          />
        ))}
      </ul>
    </>
  );
};

export default ListTodos;
