import React, { useState } from "react";
import { Link } from "react-router-dom";
import CopyCat from "../copy-cat/CopyCat";
function CopyCatContainer() {
  const [isCoping, setIsCopying] = useState(true);
  const [value, setInput] = useState('');
  const handleChange = (e) => {
    setInput(e.target.value)
    console.log(value)
  }

  const toggleCat = () => {
    setTimeout(() => {
      setIsCopying(!isCoping);
    }, 500);
  };
  return (
    <div>
      <CopyCat
        isCoping={isCoping}
        toggleCat={toggleCat}
        value={value}
        handleChange= {handleChange}
      />
      <Link to="/" >Go back to Login ↩️</Link>
    </div>
  );
}
export default CopyCatContainer;
