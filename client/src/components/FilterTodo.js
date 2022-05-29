import { useContext } from "react";
import { TodosContext } from "../context/TodosContext.js";

const FilterTodo = () => {
	const { filter, setFilter } = useContext(TodosContext);
	const clazzActive = "btn btn-success";
	const clazz = "btn btn-outline-secondary";
	return (
		<div className="btn-group mt-2">
			<button
				className={filter === "all" ? clazzActive : clazz}
				onClick={() => setFilter("all")}
			>
				All
			</button>
			<button
				className={filter === "active" ? clazzActive : clazz}
				onClick={() => setFilter("active")}
			>
				Active
			</button>
			<button
				className={filter === "done" ? clazzActive : clazz}
				onClick={() => setFilter("done")}
			>
				Done
			</button>
		</div>
	);
};

export default FilterTodo;
