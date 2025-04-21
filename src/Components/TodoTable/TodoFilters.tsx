"use client";

import SearchInput from "./SearchInput";
import { useContext } from "react";
import { TodosContext } from "../../Context/TodosContext";
import CompletedInput from "./CompletedInput";
import SelectIdInput from "./SelectIdInput";

const TodoFilters = () => {
  const { updateFilter, setSearchInput } = useContext(TodosContext);

  const handleReset = () => {
    updateFilter("reset");
    setSearchInput("");
  };

  return (
    <div className="filter-box">
      <div className="filter-title">FILTERS</div>
      <div className="filter-content">
        <SearchInput />
        <CompletedInput />
        <SelectIdInput />
      </div>
      <div onClick={() => handleReset()} className="reset-filters">
        Reset filters
      </div>
    </div>
  );
};
export default TodoFilters;
