import axios from 'axios';

const getTodos = async () => {
  try {
    const response = await axios.get('/todos');
    return response;
  } catch (error) {
    return error.message;
  }
};

const createTodo = async (description, important = false) => {
  try {
    const body = { description, important };
    return await axios.post('todos', body);
  } catch (error) {
    return error.message;
  }
};

const editTodo = async (todo, description) => {
  try {
    const { id_todo: idTodo, important, done } = todo;
    const body = { description, important, done };
    await axios.put(`/todos/${idTodo}`, body);
  } catch (error) {
    return error.message;
  }
};

const markTodo = async (todo) => {
  try {
    const { id_todo: idTodo, description, done } = todo;
    const important = !todo.important;
    const body = { description, important, done };
    await axios.put(`/todos/${idTodo}`, body);
  } catch (err) {
    console.error(err.message);
  }
};

const doneTodo = async (todo) => {
  try {
    const { id_todo: idTodo, description, important } = todo;
    const done = !todo.done;
    const body = { description, important, done };
    await axios.put(`/todos/${idTodo}`, body);
  } catch (error) {
    return error.message;
  }
};

const deleteTodo = async ({ id_todo: idTodo }) => {
  try {
    await axios.delete(`/todos/${idTodo}`);
  } catch (error) {
    return error.message;
  }
};

export { getTodos, createTodo, editTodo, markTodo, doneTodo, deleteTodo };
