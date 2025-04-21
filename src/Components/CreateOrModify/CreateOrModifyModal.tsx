import {
  Box,
  Button,
  Modal,
  styled,
  Switch,
  SwitchProps,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useContext } from "react";
import { TodosContext } from "../../Context/TodosContext";
import CloseButton from "../../assets/closeButton.svg?react";

const CompletedSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 100,
  height: 40,
  padding: 0,

  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    top: 5,
    left: 5,
    "&.Mui-checked": {
      transform: "translateX(60px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        border: 0,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 25,
    height: 25,
    margin: "auto 0",
  },
  "& .MuiSwitch-track": {
    borderRadius: 20,
    backgroundColor: "#E9E9EA",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const CreateOrModifyModal = () => {
  const {
    isNewTodo,
    todoToModify,
    isModalOpen,
    setIsModalOpen,
    setIsNewTodo,
    setTodoToModify,
    handleSave,
  } = useContext(TodosContext);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsNewTodo(false);
    setTodoToModify(null);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(() => theme.breakpoints.down(920));

  return (
    <Modal open={isModalOpen} onClose={() => handleCloseModal()}>
      <Box
        sx={{
          position: "absolute",
          top: "30%",
          left: "30%",
          padding: "20px",
          backgroundColor: "white",
          maxWidth: 500,
          width: "100%",
          // Responsive styles
          ...(isMobile && {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "auto",
            maxWidth: "none",
            height: "100%",
            padding: "16px",
            borderRadius: 0,
          }),
          // Optional transition
          transition: "all 0.3s ease",
        }}
      >
        <div className="modal-container">
          <div className="modal-header">
            <div>{isNewTodo ? "Create todo" : "Edit todo"}</div>
            {isMobile && (
              <div onClick={() => handleCloseModal()}>
                <CloseButton />
              </div>
            )}
          </div>
          <div className="f-width">
            <div className="modal-title">Title</div>
            <TextField
              className="f-width"
              hiddenLabel
              multiline={true}
              defaultValue={todoToModify ? todoToModify.title : ""}
              onChange={(e) =>
                setTodoToModify({
                  ...todoToModify,
                  title: e.target.value,
                  completed: todoToModify?.completed ?? false,
                })
              }
            />
          </div>
          {!isNewTodo && todoToModify && (
            <div className="f-width">
              <div className="modal-title">Completed</div>
              <CompletedSwitch
                checked={todoToModify.completed || false}
                onChange={() =>
                  setTodoToModify({
                    ...todoToModify,
                    completed: !todoToModify.completed,
                  })
                }
              />
            </div>
          )}
        </div>
        <div>
          <Button
            className="button-box"
            onClick={() => todoToModify && handleSave(todoToModify)}
          >
            Salva
          </Button>
        </div>
      </Box>
    </Modal>
  );
};
export default CreateOrModifyModal;
