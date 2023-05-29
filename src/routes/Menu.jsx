import React from "react";
import BurgerList from "../components/BurgerList";
import SideList from "../components/SideList";
import DrinkList from "../components/DrinkList";

function Menu() {
  return (
    <div>
      <h1 className="eatable">Eatable</h1>
      <BurgerList />;
      <div>
        <h1 className="sides">Sides</h1>
        <SideList />
      </div>
      <div>
        <h1 className="drinks">Drinks</h1>
        <DrinkList />
      </div>
    </div>
  );
}

export default Menu;
