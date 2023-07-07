import { useState } from "react";

export const UseState = () => {
  const [login, setLogin] = useState<boolean>(false);
  const changeLoginState = () => {
    setLogin((login) => !login);
  };
  return (
    <>
      {login ? <h5>The user login</h5> : <h5>the user not login</h5>}
      <button onClick={changeLoginState}>Change State</button>
    </>
  );
};
