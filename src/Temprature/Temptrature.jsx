import React, { useState } from "react";
import TempDisplay from "./TempDisplay";

export default function Temptrature() {
  const [temp, setTemp] = useState(0);

  const handleChange = e => {
    const num = Number(e.target.value);
    setTemp(num);
  };

  return (
    <div>
      <h1>Temperature</h1>
      <input
        type="number"
        name="temp"
        id="temp"
        onChange={handleChange}
        min="0"
      />
      <TempDisplay temp={temp} />
    </div>
  );
}
