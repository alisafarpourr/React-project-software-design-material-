import React from "react";

function Form({ headers, newMovie, handleSubmit, handleChange }) {
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} className="newForm">
        {headers.map((item, index) => {
          return (
            <input
              key={index}
              value={newMovie[item.path]}
              type="text"
              placeholder={item.label}
              onChange={(e) => handleChange(item.path, e.currentTarget.value)}
            />
          );
        })}
        <button type="submit">Add To movies</button>
      </form>
    </>
  );
}

export default Form;
