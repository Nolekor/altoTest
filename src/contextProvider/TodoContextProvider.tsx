import { ReactNode, useEffect, useMemo, useState } from "react";
import { TodosContext } from "../Context/TodosContext";
import { IAction, IFilters, ITodos } from "../Interface/todosInterface";

const TodoContextProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<ITodos[]>([]);
  const [todosToShow, setTodosToShow] = useState<ITodos[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);
  const [isNewTodo, setIsNewTodo] = useState<boolean>(false);
  const [todoToModify, setTodoToModify] = useState<ITodos | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState("");

  const [filters, setFilters] = useState<IFilters>({
    search: "",
    completed: 0,
    id: "",
  });

  useEffect(() => {
    const getTodos = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await res.json();
        setTodos(data);
      } catch (err) {
        setError(err as Error);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      // Filter by ID
      if (filters.id !== "" && todo.id !== filters.id) return false;

      // Filter by completion status
      if (filters.completed === 1 && !todo.completed) return false;
      if (filters.completed === 2 && todo.completed) return false;

      // Filter by search term
      if (
        filters.search &&
        !todo.title.toLowerCase().includes(filters.search.toLowerCase())
      ) {
        return false;
      }

      return true;
    });
  }, [todos, filters]);

  useEffect(() => {
    setTodosToShow(filteredTodos);
  }, [filteredTodos, todos]);

  const updateFilter = (
    type: IAction,
    value?: string | boolean | number | null
  ) => {
    if (type === "reset") {
      setFilters({ search: "", completed: 0, id: "" });
    } else {
      setFilters((prev) => ({ ...prev, [type]: value }));
    }
  };

  const handleSave = (todo: ITodos) => {
    if (!todo.id) {
      todo.id = todos.length + 1;
      todo.userId = todos.length + 1;
      setTodos((prev) => [...prev, todo]);
    } else {
      setTodos((prev) => prev.map((t) => (t.id === todo.id ? todo : t)));
    }
    setIsModalOpen(false);
    setIsNewTodo(false);
    setTodoToModify(null);
  };

  return (
    <TodosContext.Provider
      value={{
        todosToShow,
        loading,
        filters,
        isNewTodo,
        todoToModify,
        isModalOpen,
        searchInput,
        setSearchInput,
        handleSave,
        setIsModalOpen,
        setLoading,
        updateFilter,
        setIsNewTodo,
        setTodoToModify,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};
export default TodoContextProvider;
