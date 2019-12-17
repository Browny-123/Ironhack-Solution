import React, { useState } from "react";
import CustomComponent from "./CustomComponent";

export default function CustomImage() {
  const [size, setSize] = useState(0);
  const [url, setUrl] = useState("");

  const handleImg = e => {
    setUrl(e.target.value);
  };

  const handleRange = e => {
    const num = Number(e.target.value);
    setSize(num);
  };
  return (
    <div>
      <h1>Customize Image</h1>
      <input type="text" name="text" onChange={handleImg} />
      <input
        type="range"
        name="range"
        min="0"
        max="300"
        defaultValue="0"
        onChange={handleRange}
        style={{ display: "block", margin: "10px auto" }}
      />
      <CustomComponent size={size} img={url} />
    </div>
  );
}
