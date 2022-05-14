import { Fragment } from 'react';

const ListTodos = () => {
  return (
    <Fragment>
      <ul class="list-group mt-3 ml-2 mr-2">
        <li class="list-group-item active">Cras justo odio<button className="btn btn-success"><i className="bi bi-trash"></i></button></li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Morbi leo risus</li>
        <li class="list-group-item">Porta ac consectetur ac</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul> 
    </Fragment>
  );
}

export default ListTodos;
