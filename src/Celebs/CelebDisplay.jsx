import React from "react";
import "./Celeb.css";

export default function CelebDisplay({ celeb }) {
  console.log(celeb.results);
  return (
    <div>
      {celeb.results === undefined ? (
        <p>loading</p>
      ) : (
        celeb.results.map(celebrity => (
          <div className="container">
            <div className="item-layout">
              <img
                style={{ height: "150px", width: "100px" }}
                src={
                  "https://image.tmdb.org/t/p/original" + celebrity.profile_path
                }
                alt={celebrity.name}
              />
              <span>{celebrity.name}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
