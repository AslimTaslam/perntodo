import { useContext } from "react";
import { TodosContext } from "../context/TodosContext.js";

const SearchTodo = () => {
	const { searchItem, setSearchItem } = useContext(TodosContext);
	return (
		<>
			<div className="input-group mt-2">
				<input
					type="text"
					className="form-control"
					placeholder="Search todo"
					aria-label="Search todo"
					aria-describedby="basic-addon2"
					onChange={(e) => setSearchItem(e.target.value)}
					value={searchItem}
				/>

				<div className="input-group-append">
					<span className="input-group-text" id="basic-addon2">
						<i className="bi bi-search"></i>
					</span>
				</div>
			</div>
		</>
	);
};

export default SearchTodo;
