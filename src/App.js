import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import schema from './schema';

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
        validationSchema={schema}
        validateOnMount
        initialValues={{
          name: '',
          email: ''
        }}
        render={({ values, errors, touched, isValid }) => (
          <Form>

            <label>Nome: </label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" />

            <label>Email: </label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" />

            <button type="submit" disabled={!isValid}>Enviar</button>
          </Form>
        )}
      />
    </div>
  );
}

export default App;
