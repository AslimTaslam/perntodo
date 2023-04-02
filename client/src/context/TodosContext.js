import { useState, createContext } from 'react';

export const TodosContext = createContext();

export const TodosContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchItem, setSearchItem] = useState('');

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const updateTodo = (todo, action = 'edit') => {
    const idx = todos.findIndex((item) => item.id_todo === todo.id_todo);
    const before = todos.slice(0, idx);
    const after = todos.slice(idx + 1);
    if (action === 'delete') {
      setTodos([...before, ...after]);
    } else {
      setTodos([...before, todo, ...after]);
    }
  };

  const filterTodos = (items, filterStat) => {
    try {
      if (filterStat === 'done') {
        return items.filter(({ done }) => done);
      }
      if (filterStat === 'active') {
        return items.filter(({ done }) => !done);
      }
      return items;
    } catch (err) {
      console.error(err.message);
    }
  };

  const searchTodo = (items, text) => {
    try {
      if (text.length === 0) {
        return items;
      }
      return items.filter((item) =>
        item.description.toLowerCase().includes(searchItem.toLowerCase())
      );
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <TodosContext.Provider
      value={{
        todos,
        filterTodos,
        setTodos,
        filter,
        setFilter,
        searchItem,
        setSearchItem,
        addTodo,
        updateTodo,
        searchTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};
