import { useRef, useState } from "react";

export const UseRefCompo = () => {
  const nameRef = useRef<HTMLInputElement>(null!);
  const [value, setValue] = useState<string>("");

  const handleChange = () => {
    console.log(nameRef.current);
    setValue(nameRef.current.value);
  };
  return (
    <>
      <br />
      <h6>value is : {value}</h6>
      <input
        type="text"
        placeholder="Enter your name"
        ref={nameRef}
        onChange={handleChange}
      />
    </>
  );
};
