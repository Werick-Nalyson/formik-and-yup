import React from 'react';
import { Formik } from 'formik';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* render props */}
      <Formik
        initialValues={{
          name: '',
          email: ''
        }}
        render={({values, handleChange}) => (
          <form>

            <label>Nome</label>
            <input name="name" values={values.name} onChange={handleChange} />

            <label>Email</label>
            <input name="email" values={values.email} onChange={handleChange} />

          </form>
        )}
      />
    </div>
  );
}

export default App;
