type GreetProps = {
  name?: string;
};

export const Greet = (props: GreetProps) => {
  return <div>Hello {props.name}</div>;
};
