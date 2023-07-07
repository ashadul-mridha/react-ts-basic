import { useState } from "react";

interface userType {
  name: string;
  email: string;
}

export const UseState = () => {
  const [login, setLogin] = useState<boolean>(false);
  const [user, setUser] = useState<userType>({} as userType);
  const changeLoginState = () => {
    setLogin((login) => !login);
    setUser({ name: "Ashadul", email: "ashadulmridhaprog@gmail.com" });
  };
  return (
    <>
      {login ? (
        <h5>
          The {user?.name} login as his email {user?.email}
        </h5>
      ) : (
        <h5>the user not login</h5>
      )}
      <button onClick={changeLoginState}>Change State</button>
    </>
  );
};
