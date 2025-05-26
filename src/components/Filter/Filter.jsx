import { useDispatch, useSelector } from "react-redux";
import { FilterLabel, FilterInput } from "./Filter.styled";
import { setFilter } from "../redux/actions";

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector((state) => state.filters.name);

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        value={filterValue}
        onChange={handleFilterChange}
        type="text"
        name="filter"
        placeholder="Filter"
      />
    </FilterLabel>
  );
};
