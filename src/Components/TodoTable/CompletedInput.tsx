import { FormControlLabel, styled, Switch, SwitchProps } from "@mui/material";
import { useContext } from "react";
import { TodosContext } from "../../Context/TodosContext";

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

const CompletedInput = () => {
  const { filters, updateFilter } = useContext(TodosContext);
  return (
    <div>
      <div>COMPLETED</div>
      <FormControlLabel
        className="switch-label"
        control={
          <CompletedSwitch
            checked={filters.completed === 1 ? true : false}
            onChange={(e) =>
              updateFilter("completed", e.target.checked ? 1 : 2)
            }
            name="toggle-feature"
            color="primary"
            className="switch"
          />
        }
        label={`${
          filters.completed === 0
            ? "Tutti"
            : filters.completed === 1
            ? "SI"
            : "NO"
        }`}
        labelPlacement="start"
      />
    </div>
  );
};
export default CompletedInput;
