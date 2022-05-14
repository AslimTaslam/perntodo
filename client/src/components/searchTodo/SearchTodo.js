import { Fragment } from 'react';

const SearchTodo = () => {
  return (
    <Fragment>
      <div className="input-group ml-2 mr-2">
        <input type="text" className="form-control" placeholder="Search todo" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
        <div className="input-group-append">
          <button className="btn btn-outline-success mr-2" type="button">Search</button>
       </div>
      </div>
      <div className="btn-group btn-group-toggle mt-1 ml-2" data-toggle="buttons">
        <label className="btn btn-success active">
          <input type="radio" name="options" id="option1" autocomplete="off" checked/> Active
        </label>
        <label className="btn btn-success">
          <input type="radio" name="options" id="option2" autocomplete="off"/> Radio
        </label>
        <label className="btn btn-success">
          <input type="radio" name="options" id="option3" autocomplete="off"/> Radio
        </label>
</div>  
    </Fragment>
  );
}

export default SearchTodo;
