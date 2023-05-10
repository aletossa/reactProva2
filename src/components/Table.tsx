import React from 'react';
import logo from './logo.svg';
import { useState, useEffect } from "react";

const data = [
    { name: "Anom", age: 19, gender: "Male" },
    { name: "Megha", age: 19, gender: "Female" },
    { name: "Subham", age: 25, gender: "Male"},
    { name: "Alessandro", age: 19, gender: "Male"},
    { name: "Mario", age: 25, gender: "Male"},
    { name: "Giovanni", age: 28, gender: "Male"},
  ]

  function Table(){

    const [students, setStudents] = useState(data);

    function elimina(el: String){
        setStudents(students.filter(obj => obj.name != el));
    }

    return (
        <div className="App">
          <center>
          <table border = {2}>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              
            </tr>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.name}</td>
                  <td>{val.age}</td>
                  <td>{val.gender}</td>
                  <td><button onClick={() => elimina(val.name)}>Delete</button></td>
                </tr>
              )
            })}
          </table>
          </center>
        </div>
      );
      
  }
  export default Table;