import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../Firebase/firebase-config';



const auth = getAuth(app);

const Register = () => {
    const [email , setEmail] = useState('');
// const [password , setPassword] = useState('');



const handleSubmit = (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;
  console.log(email,password);

  createUserWithEmailAndPassword(auth,email,password)
  .then(result => {
   const loggedUser = result.user;
   console.log(loggedUser)
  })
  .catch(error => {
    console.log('errror', error.message)
  })

}

const handleEmailChange = (event) =>{

}

const handlePasswordBlur = (event) =>{
 
 
}

    return (
        <div>
            <form className='mx-auto w-50' onSubmit ={handleSubmit}>
                <input onChange={handleEmailChange} type="email" name="email" id="email" placeholder='Type Your Email' /><br/>
                <input onBlur={handlePasswordBlur} type="password" name="password" id="password" placeholder='Type Your Password' />
               <br />
               <input style={{backgroundColor:'greenyellow'}} type="submit" value="Register" />
            </form>
           
        </div>
    );
};

export default Register;