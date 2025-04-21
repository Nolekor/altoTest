import { createContext } from "react";
import { ITodoContextValue } from "../Interface/todosInterface"; // Adjust path as needed

export const TodosContext = createContext<ITodoContextValue>({
  todosToShow: [],
  loading: false,
  isModalOpen: false,
  todoToModify: null,
  isNewTodo: false,
  filters: {
    search: "",
    completed: 0,
    id: "",
  },
  searchInput: "",
  setSearchInput: () => {},
  handleSave: () => {},
  updateFilter: () => {},
  setIsModalOpen: () => {},
  setTodoToModify: () => {},
  setLoading: () => {},
  setIsNewTodo: () => {},
});
