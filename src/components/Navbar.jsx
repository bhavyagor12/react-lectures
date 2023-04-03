import React from "react";

const Navbar = ({ count }) => {
  return (
    <div>
      Navbar
      {count === 0 ? (
        <div>Hey the count is 0</div>
      ) : (
        <div>Hey thanks for shopping</div>
      )}
    </div>
  );
};

export default Navbar;
