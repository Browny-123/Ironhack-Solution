import React from "react";

export default function CustomComponent({ size, img }) {
  const style = {
    height: size + "px",
    width: size + "px"
  };

  console.log(style.height);
  return (
    <div>
      <h2>
        {size} x {size} px
      </h2>
      <img style={style} src={img} alt={img} />
    </div>
  );
}
