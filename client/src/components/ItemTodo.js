import { Fragment, useState, useContext } from 'react';
import { editTodo, markTodo, doneTodo, deleteTodo } from '../apis/TodoList.js';
import { TodosContext } from '../context/TodosContext.js';
import EditTodo from './EditTodo.js';

const ItemTodo = ({todo}) => {
  const { updateTodo } = useContext(TodosContext);
  const [editActive, setEditActive] = useState(false);
  const [description, setDescription] = useState(todo.description);

  const onEdit = async () => {
    if(editActive){
      try{
        const response = await editTodo(todo, description);
        const newTodo = {...todo, description};
        updateTodo(newTodo);
      }catch(err){
        console.error(err.message);
      }
    }
    setEditActive(!editActive);
  }

  const onMark = async () => {
    try{
      const response = await markTodo(todo);
      const newTodo = {...todo, important: !todo.important};
      updateTodo(newTodo);
    }catch(err){
      console.error(err.message);
    }
  }

  const onDone = async () => {
    try{
      const response = await doneTodo(todo);
      const newTodo = {...todo, done: !todo.done};
      updateTodo(newTodo);
    }catch(err){
      console.error(err.message);
    }
  }

  const onDelete = async () => {
    try{
      const response = await deleteTodo(todo);
      updateTodo(todo, 'delete');
    }catch(err){
      console.error(err.message);
    }
  }
 
  let clazz = "edit-item col";
  if(todo.important) {
    clazz += " text-info font-weight-bold";
  }if(todo.done) {
    clazz += " done";
  }

  const showContent = editActive ? <EditTodo description={description} active={editActive} onChangeDescription={(value) => setDescription(value)}/> : (
	  <input
	    type="text"
	    className={clazz}
	    readOnly="readonly"
	    value={todo.description}
	    onClick={onDone}
	  />
  );

  return (
    <Fragment>
      <li className="list-group-item font-weight-bold text-info">
	<div className="container">
	  <div className="row">

	    {showContent}

	    <div className="col float-right">
              <button
	        className="btn btn-danger btn-sm float-right ml-1"
                onClick={onDelete}>
                <i className="bi bi-trash"></i>
              </button>
	      <button
	        type="button"
	        className="btn btn-success float-right btn-sm ml-1"
	        onClick={onEdit}>
	        <i className="bi bi-pencil"></i>
	      </button>
	      <button
	        className="btn btn-warning btn-sm float-right ml-1"
                onClick={onMark}	                >
                <i className="bi bi-exclamation"></i>
	      </button>
	    </div>
	  </div>
	</div>
      </li>
    </Fragment>
  );
}

export default ItemTodo;
