import pool from '../database/db.js';

export const getAllTodos = async () => {
  const allTodos = await pool.query('SELECT * FROM todo');
  return allTodos;
};

export const getTodoById = async (id) => {
  const todo = await pool.query('SELECT * FROM todo WHERE id_todo = $1', [id]);
  return todo;
};

export const createTodo = async (description, important) => {
  const newTodo = await pool.query(
    'INSERT INTO todo (description, important, done) VALUES($1, $2, DEFAULT) RETURNING *',
    [description, important]
  );
  return newTodo;
};

export const editTodoById = async (id, description, important, done) => {
  const editTodo = await pool.query(
    'UPDATE todo SET description = $1, important = $2, done = $3 WHERE id_todo = $4',
    [description, important, done, id]
  );
  return editTodo;
};

export const deleteTodoById = async (id) => {
  const deleteTodo = await pool.query('DELETE FROM todo WHERE id_todo = $1', [
    id,
  ]);
  return deleteTodo;
};
