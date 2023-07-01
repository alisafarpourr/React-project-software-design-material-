import React from "react";
import { Link } from "react-router-dom";

function Table({ movies, headers }) {
  return (
    <>
      <div className="addPadding">
        <div className="table-responsive tableFixHead">
          <table className="table">
            <thead>
              <tr>
                {headers.map((item, index) => {
                  return <th key={index}>{item.label}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {movies.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.title}</td>
                    <td>{item.genre}</td>
                    <td>{item.year}</td>
                    <td>{item.rating}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Link className="newMovie" to="/new">Add Movie</Link>
    </>
  );
}

export default Table;
