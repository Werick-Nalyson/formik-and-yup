import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [values, setValues] = useState({
    name: '',
    email: ''
  });

  function onChange(e) {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
    });

    console.log(values);
  };

  return (
    <div className="App">
      <form>

        <label>Nome</label>
        <input name="name" values={values.name} onChange={onChange} />

        <label>Email</label>
        <input name="email" values={values.email} onChange={onChange} />

      </form>
    </div>
  );
}

export default App;
