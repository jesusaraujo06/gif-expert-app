import { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState("Hola mundo");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Enviado");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </form>
    </>
  );
};