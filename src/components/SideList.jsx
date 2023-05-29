import React, { useState, useEffect } from "react";
import SideCard from "./SideCard";

function SideList() {
  const [sides, setSides] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/sides")
      .then((r) => r.json())
      .then((data) => setSides(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="items-container">
      {sides.map((side) => (
        <SideCard
          key={side.id}
          image={side.image}
          name={side.name}
          price={side.price}
          description={side.description}
        />
      ))}
    </div>
  );
}

export default SideList;
