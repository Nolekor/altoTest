import { Button } from "@mui/material";
import { useContext } from "react";
import { TodosContext } from "../../Context/TodosContext";

const ButtonPurple = ({ text }: { text: string }) => {
  const { setIsNewTodo, setIsModalOpen } = useContext(TodosContext);
  const handleClick = () => {
    setIsNewTodo(true);
    setIsModalOpen(true);
  };
  return (
    <Button className="button-box" onClick={() => handleClick()}>
      {text}
    </Button>
  );
};
export default ButtonPurple;
