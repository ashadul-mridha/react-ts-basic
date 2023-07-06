type personProps = {
  person: {
    name: string;
    age: number;
  };
};
export default function Person(props: personProps) {
  return (
    <h4>
      {props.person.name}, {props.person.age}
    </h4>
  );
}
