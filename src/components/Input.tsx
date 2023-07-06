import React from "react";

interface inputProps {
  changeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<inputProps> = ({ changeInput }) => {
  return (
    <input type="text" id="name" name="name" onChange={(e) => changeInput(e)} />
  );
};
