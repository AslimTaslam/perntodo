import { Router } from 'express';
import {
  createTodoController,
  deleteTodoController,
  editTodoController,
  getAllTodosController,
  getTodoController,
} from '../controllers/todo-controllers.js';

const router = Router();

router.get('/todos', getAllTodosController);
router.get('/todos/:id', getTodoController);
router.post('/todos', createTodoController);
router.put('/todos/:id', editTodoController);
router.delete('/todos/:id', deleteTodoController);

export default router;
