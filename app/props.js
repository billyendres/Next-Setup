const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>
        Hello, {name}, you're {age} years old.
        <p>So you were born in {bornYear()}</p>
      </p>
    </div>
  );
};

const Props = () => {
  const name = "Billy";
  const age = 25;

  return (
    <div>
      <h1>Greetings</h1>
      <p>
        <Hello name={name} age={age} />
      </p>
    </div>
  );
};

export default Props;
