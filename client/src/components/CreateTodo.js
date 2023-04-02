import { useState, useContext } from 'react';
import { createTodo } from '../services/TodoList.js';
import { TodosContext } from '../context/TodosContext.js';

const CreateTodo = () => {
  const { addTodo } = useContext(TodosContext);
  const [description, setDescription] = useState('');
  const [important, setImportant] = useState(false);

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await createTodo(description, important);
      addTodo(res.data);
      setImportant(false);
      setDescription('');
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleChangeImportant = () => {
    setImportant(!important);
  };

  return (
    <>
      <button
        type='button'
        className='btn btn-success float-right mt-2'
        data-toggle='modal'
        data-target='#createTodo'
      >
        Add +
      </button>

      <div
        className='modal'
        id='createTodo'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h4 className='modal-title'>Create todo</h4>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
              >
                &times;
              </button>
            </div>

            <div className='modal-body'>
              <input
                type='text'
                className='form-control'
                value={description}
                onChange={(e) => handleChangeDescription(e)}
              />
              <div className='form-check mt-2'>
                <input
                  id='important'
                  className='form-check-input'
                  type='checkbox'
                  checked={important}
                  onChange={handleChangeImportant}
                />
                <label htmlFor='important'>Important</label>
              </div>
            </div>

            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-success'
                data-dismiss='modal'
                onClick={handleAdd}
              >
                Create
              </button>
              <button
                type='button'
                className='btn btn-danger'
                data-dismiss='modal'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTodo;
