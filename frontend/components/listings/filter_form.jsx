import React from "react";

const handleChange = (filter, updateFilter) => (e) =>
  updateFilter(filter, parseInt(e.currentTarget.value));

const FilterForm = ({ minGuest, maxGuest, updateFilter }) => (
  <div>
    <span className="filter">Filter results:</span>
    <br />
    <label>Minimum Guests</label>
    <input
      type="number"
      value={minGuest}
      onChange={handleChange("minGuest", updateFilter)}
    />
    <br />
    <label>Maximum Guests</label>
    <input
      type="number"
      value={maxGuest}
      onChange={handleChange("maxGuest", updateFilter)}
    />
  </div>
);

export default FilterForm;
