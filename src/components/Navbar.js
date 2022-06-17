import React from "react";

const Navbar = () => {
  const logoimg ="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <nav>
      <img src={logoimg} alt="Logo do pokemon"
      className="navbar-img"
      />
    </nav>
  );
};

export default Navbar;
