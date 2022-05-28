import SearchTodo from "./components/SearchTodo.js";
import FilterTodo from "./components/FilterTodo.js";
import CreateTodo from "./components/CreateTodo.js";
import ListTodos from "./components/ListTodos.js";
import ErrorBoundary from "./components/ErrorBoundary.js";
import { TodosContextProvider } from "./context/TodosContext.js";

const App = () => {
	return (
		<TodosContextProvider>
			<ErrorBoundary>
				<div className="container">
					<h1 className="text-center mt-3">Todo app</h1>
					<SearchTodo />
					<div>
						<FilterTodo />
						<CreateTodo />
					</div>
					<ErrorBoundary>
						<ListTodos />
					</ErrorBoundary>
				</div>
			</ErrorBoundary>
		</TodosContextProvider>
	);
};

export default App;
