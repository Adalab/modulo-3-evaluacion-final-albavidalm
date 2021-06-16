import React from "react";
import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";

const Filters = (props) => {
  return (
    <section>
      <form className="form">
        <FilterByName handleFilter={props.handleFilter} />
        <FilterBySpecies handleFilter={props.handleFilter} />
      </form>
    </section>
  );
};

export default Filters;
