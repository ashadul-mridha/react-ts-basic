type greetProps = {
  name: string;
};
export default function Greet(props: greetProps) {
  return (
    <>
      <h3>Hello {props.name}, welcome to our dashboard</h3>
    </>
  );
}
