import {
  createTodo,
  deleteTodoById,
  editTodoById,
  getAllTodos,
  getTodoById,
} from '../services/todo-services.js';

export const getAllTodosController = async (req, res) => {
  try {
    const allTodos = await getAllTodos();

    res.json(allTodos.rows);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getTodoController = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await getTodoById(id);
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const createTodoController = async (req, res) => {
  try {
    const { description, important } = req.body;
    const newTodo = await createTodo(description, important);

    res.json(newTodo.rows[0]);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const editTodoController = async (req, res) => {
  try {
    const { id } = req.params;
    const { description, important, done } = req.body;
    const editTodo = await editTodoById(id, description, important, done);
    res.json(editTodo);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deleteTodoController = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteTodoById(id);
    res.json('deleted todo');
  } catch (error) {
    res.status(500).json({ error });
  }
};
