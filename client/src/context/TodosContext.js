import { useState, createContext } from "react";

export const TodosContext = createContext();

export const TodosContextProvider = (props) => {
	const [todos, setTodos] = useState(null);
	const [filter, setFilter] = useState("all");
	const [searchItem, setSearchItem] = useState("");

	const addTodo = (todo) => {
		setTodos([...todos, todo]);
	};

	const updateTodo = (todo, action = "edit") => {
		const idx = todos.findIndex((item) => item.id_todo === todo.id_todo);
		const before = todos.slice(0, idx);
		const after = todos.slice(idx + 1);
		if (action === "delete") {
			setTodos([...before, ...after]);
		} else {
			setTodos([...before, todo, ...after]);
		}
	};

	const filterTodos = (items, filterStat) => {
		try {
			if (filterStat === "done") {
				return items.filter(({ done }) => !done);
			} else if (filterStat === "active") {
				return items.filter(({ done }) => done);
			} else {
				return items;
			}
		} catch (err) {
			console.error(err.message);
		}
	};

	const searchTodo = (items, searchItem) => {
		try {
			if (searchItem.length === 0) {
				return items;
			}
			return items.filter((item) => {
				return (
					item.description.toLowerCase().indexOf(searchItem.toLowerCase()) > -1
				);
			});
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<TodosContext.Provider
			value={{
				todos,
				filterTodos,
				setTodos,
				filter,
				setFilter,
				searchItem,
				setSearchItem,
				addTodo,
				updateTodo,
				searchTodo,
			}}
		>
			{props.children}
		</TodosContext.Provider>
	);
};
