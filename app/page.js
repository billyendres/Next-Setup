import State from "./components/State";

const Props = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>
        Hey, {name}, you're {age} years old. So you were born in {bornYear()}
      </p>
    </div>
  );
};

const Page = () => {
  const name = "Billy";
  const age = 25;

  return (
    <div>
      <h1>Greetings</h1>
      <Props name={name} age={age} />
      <State />
    </div>
  );
};

export default Page;
