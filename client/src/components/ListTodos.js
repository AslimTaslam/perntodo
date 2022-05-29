import { useState, useEffect, useContext } from "react";
import { getTodos } from "../apis/TodoList.js";
import { TodosContext } from "../context/TodosContext";
import ItemTodo from "./ItemTodo.js";
import Loader from "./Loader.js";

const ListTodos = (props) => {
	const { todos, setTodos, filter, filterTodos, searchTodo, searchItem } =
		useContext(TodosContext);
  const [ loading, setLoading ] = useState(false);

	const fetchData = async () => {
		setLoading(true);
		const data = await getTodos();
		if (data.data) {
			setTodos(data.data);
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const visibleTodos = searchTodo(filterTodos(todos, filter), searchItem);

	if (loading) {
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
