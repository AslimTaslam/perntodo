import { useEffect, useContext } from "react";
import { getTodos } from "../apis/TodoList.js";
import { TodosContext } from "../context/TodosContext";
import ItemTodo from "./ItemTodo.js";
import Loader from "./Loader.js";

const ListTodos = (props) => {
	const { todos, setTodos, filter, filterTodos, searchTodo, searchItem } =
		useContext(TodosContext);

	const fetchData = async () => {
		const data = await getTodos();
		if (data) {
			setTodos(data.data);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const visibleTodos = searchTodo(filterTodos(todos, filter), searchItem);
	if (!visibleTodos) {
		return <Loader />;
	}
	return (
		<>
			<ul className="list-group mt-2">
				{visibleTodos.map((todo) => (
					<ItemTodo todo={todo} key={todo.id_todo} />
				))}
			</ul>
		</>
	);
};

export default ListTodos;
