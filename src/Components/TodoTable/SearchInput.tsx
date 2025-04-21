import { Input } from "@mui/material";
import { TodosContext } from "../../Context/TodosContext";
import { useContext } from "react";

const SearchInput = () => {
  const { updateFilter, searchInput, setSearchInput } =
    useContext(TodosContext);

  const handleSearchKeyPress = (e) => {
    if (e.key === "Enter") {
      updateFilter("search", searchInput);
    }
  };
  return (
    <div className="input-box">
      <div>
        <img src="./images/search.png" alt="search icon" className="icon" />
      </div>
      <Input
        type="text"
        placeholder="Search"
        className="input"
        value={searchInput}
        disableUnderline={true}
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={handleSearchKeyPress}
      />
    </div>
  );
};
export default SearchInput;
