import ButtonPurple from "../CreateOrModify/ButtonPurple";
import TodoFilters from "./TodoFilters";
import Todos from "./Todos";
import CreateOrModifyModal from "../CreateOrModify/CreateOrModifyModal";

const TodoTable = () => {
  return (
    <div className="todos-container">
      <div className="left-container">
        <TodoFilters />
        <ButtonPurple text={"New todo"} />
      </div>
      <Todos />
      <CreateOrModifyModal />
    </div>
  );
};
export default TodoTable;
