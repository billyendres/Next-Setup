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

export default Props;
