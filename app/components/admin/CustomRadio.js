const CustomRadio = ({ checked, onChange, size, color, ringColor, id }) => {
  const radioStyle = {
    appearance: "none",
    width: size,
    height: size,
    borderRadius: "50%",
    border: `2px solid ${ringColor}`,
    backgroundColor: checked ? color : "transparent",
    outline: "#02a29e",
    cursor: "pointer",
  };

  const handleOnChange = () => {
    if (onChange) {
      onChange(!checked);
    }
  };

  return (
    <div>
      <input
        type="radio"
        id={id}
        checked={checked}
        onChange={handleOnChange}
        style={radioStyle}
      />
    </div>
  );
};

export default CustomRadio;
