import type { GreetingProps } from "./types";

function Model({ name, age }: GreetingProps) {
  return (
    <>
      <h1>Hi my name is {name}</h1>
      <h5>And my age is {age}</h5>
    </>
  );
}

export default Model;
