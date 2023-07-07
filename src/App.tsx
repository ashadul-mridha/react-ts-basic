import React from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import Greet from "./components/Greet";
import Home from "./components/Home";
import { Input } from "./components/Input";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import { UseState } from "./components/hooks/UseState";

function App() {
  const person = {
    name: "Ashadul",
    age: 23,
  };
  const personList = [
    { name: "rafa", age: 20 },
    { name: "ruba", age: 26 },
    { name: "adib", age: 30 },
  ];
  // handle button event
  const clickEvent = (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
    id: number
  ) => {
    console.log("click event", event, id);
  };
  // handle input element change event
  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("change event", e.target.value);
  };
  // container style
  const styles = {
    // backgroundColor: "green",
    // width: "100%",
    // height: "100%",
  };
  return (
    <Container styles={styles}>
      <Home>
        <Greet name="Ashadul Mridha" />
      </Home>
      <Person person={person} />
      <PersonList personList={personList} />
      <Button handleClick={clickEvent} /> <br />
      <Input changeInput={changeInput} />
      <UseState />
    </Container>
  );
}

export default App;
