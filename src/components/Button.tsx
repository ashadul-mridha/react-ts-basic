import React from "react";

interface ButtonProps {
  handleClick: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
    id: number
  ) => void;
}

export const Button: React.FC<ButtonProps> = ({ handleClick }) => {
  return <button onClick={(e) => handleClick(e, 2)}>Button</button>;
};
