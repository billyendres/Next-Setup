const Display = ({ counter, click, colorOne, colorTwo }) => {
  return (
    <>
      <h1>
        <span style={{ color: colorOne }}>{counter}</span>
      </h1>

      <div>
        I've been clicked <span style={{ color: colorTwo }}>{click}</span>{" "}
        times.
      </div>
    </>
  );
};

export default Display;
