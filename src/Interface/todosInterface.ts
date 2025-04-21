export interface ITodoContextValue {
  todosToShow: ITodos[];
  loading: boolean;
  filters: IFilters;
  isModalOpen: boolean;
  isNewTodo: boolean;
  todoToModify: ITodos | null;
  searchInput: string;
  setSearchInput: (searchInput: string) => void;
  handleSave: (todo: ITodos) => void;
  setIsModalOpen: (isModalOpen: boolean) => void;
  setTodoToModify: (todo: ITodos | null) => void;
  setLoading: (loading: boolean) => void;
  setIsNewTodo: (isNewTodo: boolean) => void;
  updateFilter: (
    filters: IAction,
    value?: string | boolean | number | null
  ) => void;
}
export interface ITodos {
  title: string;
  completed: boolean;
  id?: number | string;
  userId?: number;
}

export interface IFilters {
  search: string;
  completed: FilterType;
  id: number | string;
}

export type IAction = keyof IFilters | "reset";

export enum FilterType {
  all = 0,
  completed = 1,
  uncompleted = 2,
}
