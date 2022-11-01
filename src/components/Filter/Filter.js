import { FilterLable, FilterInput, FilterBlock } from './Filter.style';

const Filter = ({ handleFilter, filter }) => {
  return (
    <FilterBlock>
      <h2>Contact</h2>
      <FilterLable>
        Find contacts by name
        <FilterInput
          onChange={handleFilter}
          type="text"
          value={filter}
          name="name"
          placeholder="filter"
        />
      </FilterLable>
    </FilterBlock>
  );
};

export default Filter;
