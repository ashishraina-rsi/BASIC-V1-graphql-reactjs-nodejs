import React, {useState} from 'react';
import { useMutation } from "@apollo/client";
import { CREATE_USER_MUTATION } from '../GraphQL/Mutations';

function Form() {
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [createUser, { error }] = useMutation(CREATE_USER_MUTATION);

  const handleSubmit = (e) => {
    // e.preventDefault();
      createUser({
      variables: {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
      },
    });

    if (error) {
      console.log(error);
    }
  }
  return <div>
      <h3>Add Users</h3>
      <form action="">
        <input 
          type="text" 
          name="firstname" 
          onChange={(e) => setFirstname(e.target.value)} 
          value={firstName}
          placeholder="Firstname"
        />
        <input 
          type="text" 
          name="lastname" 
          onChange={(e) => setLastname(e.target.value)} 
          value={lastName}
          placeholder="Lastname"
        />
        <input 
          type="text" 
          name="email" 
          onChange={(e) => setEmail(e.target.value)} 
          value={email}
          placeholder="Email"
        />
        <input 
          type="text" 
          name="password"
          onChange={(e) => setPassword(e.target.value)} 
          value={password}
          placeholder="Password"
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
  </div>;
}

export default Form;
