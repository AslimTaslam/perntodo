const { Router } = require('express');
const pool = require('./db.js');

const router = Router();

//Create a todo
router.post('/todos', async (req, res) => {
  try{
    const {description, important, done} = req.body;
    const newTodo = await pool.query(
      'INSERT INTO todo (description, important, done) VALUES($1, $2, $3) RETURNING *',
      [description, important, done]
    );
    res.json(newTodo.rows[0]); 
  }catch(err){
    console.error(err.message);
  }
});

//Get a todo
router.get('/todos/:id', async (req, res) => {
  try{
    const {id} = req.params;
    const todo = await pool.query(
      'SELECT * FROM todo WHERE id_todo = $1',
      [id]);
    res.json(todo);
  }catch(err){
    console.error(err.message);
  }
});

//Get all todos
router.get('/todos' async (req, res) => {
  try{
    const allTodos = await pool.query('SELECT * FROM todo');
    res.json(allTodos.rows);
  }catch(err){
    console.error(err.message);
  }
});

//Edit todo
router.put('/todos/:id', async (req, res) => {
  try{
    const { id } = req.params;
    const { description, important, done } = req.body;
    const editTodo = await pool.query(
      'UPDATE todo SET description = $1, important = $2, done = $3 WHERE id_todo = $4',
      [description, important, done, id]
    );
    res.json('updated todo');
  }catch(err){
    console.error(err.message);
  }
});

//Delete todo
router.delete('/todos/:id', async (req, res) => {
  try{
    const { id } = req.params;
    const deleteTodo = await pool.query(
      'DELETE FROM todo WHERE id_todo = $1',
      [id]);
     res.json('deleted todo');
  }catch(err){
    console.error(err.message);
  }
});

module.exports = router;
