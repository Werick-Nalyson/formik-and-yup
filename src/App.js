import React from 'react';
import { Formik, Field, Form } from 'formik';
import './App.css';

function App() {

  function onSubmit(values, actions) {
    console.log("SUBMIT:", values);
  }

  return (
    <div className="App">
      {/* render props */}
      <Formik
        onSubmit={onSubmit}
        initialValues={{
          name: '',
          email: ''
        }}
        render={({ values }) => (
          <Form>

            <label>Nome: </label>
            <Field name="name" />

            <label>Email: </label>
            <Field name="email" />

            <button type="submit">Enviar</button>
          </Form>
        )}
      />
    </div>
  );
}

export default App;
