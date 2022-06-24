import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("xjvldozy");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <form className='formsubmit' onSubmit={handleSubmit}>
      <label htmlFor="email">
        Your email ✨ 
      </label>
      <input className='inp'
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
    
      <button className='but' type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;
