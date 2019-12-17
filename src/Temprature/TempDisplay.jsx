import React from "react";

export default function TempDisplay({ temp }) {
  console.log(typeof temp);
  return (
    <div>
      {(() => {
        switch (true) {
          case temp > 0 && temp <= 10:
            return (
              <p style={{ color: "blue" }}>
                Its Cold<span> ❄️</span>
              </p>
            );
          case temp > 10 && temp <= 30:
            return (
              <p>
                Its Nice <span> 🌼</span>
              </p>
            );
          case temp > 30:
            return (
              <p style={{ color: "red" }}>
                Its Warm <span> ☀️</span>
              </p>
            );
          default:
            return null;
        }
      })()}
    </div>
  );
}
