import React from "react";

const Searchbar = () => {
  let search = "charizard"
  const onChangeHandler = (e) => {
    console.log("pokemon:", e.target.value)
  }
  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Buscar pokemon" onChange={onChangeHandler} />
        {search}
      </div>
    </div>
  );
};

export default Searchbar;
