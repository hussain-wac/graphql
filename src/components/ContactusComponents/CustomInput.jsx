import React from "react";
import { useField } from "informed";

const CustomInput = ({ label, validate, required, ...props }) => {
  const { fieldState, fieldApi } = useField({ validate, required, ...props });
  const { value, error, showError } = fieldState;
  const { setValue, setTouched } = fieldApi;

  const inputStyle = {
    padding: "10px",
    border: showError ? "1px solid red" : "1px solid #ccc",
    width: "100%",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  };

  const errorStyle = {
    color: "red",
    fontSize: "12px",
    marginTop: "5px",
  };

  return (
    <div className="mb-4" style={{ marginBottom: "20px" }}>
      {label && <label style={labelStyle}>{label}</label>}
      <input
        {...props}
        value={value ?? ""}
        onChange={(e) => setValue(e.target.value, e)}
        onBlur={(e) => setTouched(true, e)}
        style={inputStyle}
      />
      {showError && <small style={errorStyle}>{error}</small>}
    </div>
  );
};

export default CustomInput;
