import axios from "axios";

const getTodos = async () => {
	try {
		const response = await axios.get("/todos");
		return response;
	} catch (err) {
		console.error(err.message);
	}
};

const createTodo = async (description, important = false) => {
	try {
		const body = { description, important };
		return await axios.post("todos", body);
	} catch (err) {
		console.error(err.message);
	}
};

const editTodo = async (todo, description) => {
	try {
		const { id_todo, important, done } = todo;
		const body = { description, important, done };
		await axios.put(`/todos/${id_todo}`, body);
	} catch (err) {
		console.error(err.message);
	}
};

const markTodo = async (todo) => {
	try {
		const { id_todo, description, done } = todo;
		const important = !todo.important;
		const body = { description, important, done };
		await axios.put(`/todos/${id_todo}`, body);
	} catch (err) {
		console.error(err.message);
	}
};

const doneTodo = async (todo) => {
	try {
		const { id_todo, description, important } = todo;
		const done = !todo.done;
		const body = { description, important, done };
		await axios.put(`/todos/${id_todo}`, body);
	} catch (err) {
		console.error(err.message);
	}
};

const deleteTodo = async ({ id_todo }) => {
	try {
		await axios.delete(`/todos/${id_todo}`);
	} catch (err) {
		console.error(err.message);
	}
};

export { getTodos, createTodo, editTodo, markTodo, doneTodo, deleteTodo };
