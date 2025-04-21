import { useContext, useEffect, useState } from "react";
import { TodosContext } from "../../Context/TodosContext";
import { Pagination, useMediaQuery, useTheme } from "@mui/material";
import { ITodos } from "../../Interface/todosInterface";
import CompletedIcon from "../../assets/completedIcon.svg?react";
import CloseButton from "../../assets/closeButton.svg?react";

const Todos = () => {
  const { todosToShow, setTodoToModify, setIsModalOpen } =
    useContext(TodosContext);
  const [currentTodos, setCurrentTodos] = useState<ITodos[]>([]);
  const [page, setPage] = useState(1);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleOnChange = (_, value: number) => {
    setPage(value);
    setCurrentTodos(todosToShow.slice((value - 1) * 5, value * 5));
  };

  useEffect(() => {
    setCurrentTodos(todosToShow.slice((page - 1) * 5, page * 5));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todosToShow]);

  return (
    <div className="todos-box">
      <div>
        <div className="todos-header">
          <div>user Id</div>
          <div>Title</div>
          <div>Completed</div>
        </div>
        <div className="todos-list">
          <ul>
            {currentTodos.map((todo) => {
              const capitalizeOnlyFirstLetter: (str: string) => string = (
                str
              ) => str.charAt(0).toUpperCase() + str.slice(1);
              return (
                <li
                  className="todo-item"
                  key={todo.id}
                  onClick={() => {
                    setIsModalOpen(true);
                    setTodoToModify(todo);
                  }}
                >
                  <div className="todo-id">{todo.id}</div>
                  <div>{capitalizeOnlyFirstLetter(todo.title)}</div>
                  <div>
                    {todo.completed ? <CompletedIcon /> : <CloseButton />}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <Pagination
          siblingCount={isMobile ? 0 : 1}
          boundaryCount={isMobile ? 1 : 2}
          count={todosToShow && Math.ceil(todosToShow.length / 5)}
          page={page}
          onChange={handleOnChange}
          className="pagination"
        />
      </div>
    </div>
  );
};
export default Todos;
