import React from "react";

export const images = {
  copycat:
    "https://content.codecademy.com/courses/React/react_photo_copycat.png",
  quietcat:
    "https://content.codecademy.com/courses/React/react_photo_quietcat.png",
};
function CopyCat({ name, isCoping, toggleCat, handleChange, value }) {
  return (
    <div>
      <h1 >{name || "jun"} is Repeating your words</h1>
      <form>
        <label htmlFor="word" style={{ display: "block" }}>
          Write words here
        </label>
        <input type="text" value={value} onChange={handleChange} />
      </form>
      <img
        src={isCoping ? images.copycat : images.quietcat}
        alt={isCoping ? "copycat" : "quietcat"}
        width={300}
        onClick={toggleCat}
      />
      <p data-testid='copy-cat'>{isCoping ? value : null}</p>
    </div>
  );
}

export default CopyCat;
