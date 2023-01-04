import React from "react";

const Loader = ({ count = 4 }) => {
  const items = new Array(count).fill(0);
  return (
    <ul className="loader">
      {items.map((_, index) => (
        <li key={`loader_${index}`} />
      ))}
    </ul>
  );
};

export default Loader;
