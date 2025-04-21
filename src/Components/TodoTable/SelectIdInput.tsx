import { MenuItem, Select } from "@mui/material";
import { TodosContext } from "../../Context/TodosContext";
import { useContext } from "react";
import DownIcon from "../../assets/DownIcon.svg?react";

const SelectIdInput = () => {
  const { filters, updateFilter, todosToShow } = useContext(TodosContext);
  return (
    <div>
      <div>SELECT USER ID</div>
      <Select
        value={filters.id}
        className="search-box"
        IconComponent={DownIcon}
        onChange={(event) => {
          updateFilter("id", event.target.value);
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              maxHeight: 200,
              display: "flex",
              flexDirection: "column",
              "& .MuiList-root": {
                flex: 1,
                overflow: "auto",
              },
            },
          },
        }}
      >
        {todosToShow.map((todo) => (
          <MenuItem key={todo.id} value={todo.id}>
            {todo.id}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};
export default SelectIdInput;
