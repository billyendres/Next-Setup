const Button = ({ onClick, text, color, border }) => {
  return (
    <button style={{ color, border, padding: "0.5rem" }} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
