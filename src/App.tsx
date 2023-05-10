import React from 'react';
import logo from './logo.svg';
import {useState} from "react";
import './App.css';

const data = [
    { name: "Anom", age: 19, gender: "Male" },
    { name: "Megha", age: 19, gender: "Female" },
    { name: "Subham", age: 25, gender: "Male"},
    { name: "Alessandro", age: 19, gender: "Male"},
    { name: "Mario", age: 25, gender: "Male"},
    { name: "Giovanni", age: 28, gender: "Male"},
  ]

  function App(){

    const [students, setStudents] = useState(data);
    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");

    function elimina(el: String){
      
        setStudents(students.filter(obj => obj.name !== el));
    }

    function aggiungi(){
      let newStudentsArray = students;
      newStudentsArray.push(name: String; age: parseInt(age); gender: String;)
    }

    return (
        <div className="App">
          <center>
          <table border = {2}>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Elimina</th>
            </tr>
            {students.map((val, key) => {
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
          <button onClick={() => setShowForm(true)}>Inserisci</button>
          {showForm &&
          <form> 

            <br/>
            <br/>
            <input type="text" name="name"/>
            
            <br/>
            <br/>
            <input type="text" name="age"/>
            
            <br/>
            <br/>
            <select name="gender" onChange={e => setGender(e.target.value)}>

              <option>Male</option>
              <option>Female</option>
              
            </select>

            <br/>
            <br/>
            <input type="button" name="salva" value="Salva"/>
            

          </form>
          }
          </center>
        </div>
      );
      
  }
  export default App;