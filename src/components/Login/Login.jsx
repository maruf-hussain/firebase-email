import {  getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import app from '../../Firebase/firebase-config';
import { Link } from 'react-router-dom';



const auth = getAuth(app);

const Login = () => {

 const [error , setError] = useState('');
 const [succes, setSucces] = useState('');  
 const emailRef = useRef();

const handleSubmit = (event) => {
  event.preventDefault();
  setSucces('');
  const email = event.target.email.value;
  const password = event.target.password.value;
  console.log(email,password);

  signInWithEmailAndPassword(auth,email,password)
  .then(result => {
   const loggedUser = result.user;
   console.log(loggedUser);
   if(!loggedUser.emailVerified)
   setSucces('User Loggin succesfully');
   setError('');
   event.target.reset();
  })
  .catch(error => {
    console.log('errror', error.message)
    setError('Loggin failed please appropiate keyword')
    
  })

}

const resetPassword = (event) =>{
  const email = emailRef.current.value;
  if(!email){
    alert('write youre proper email address')
  }

  sendPasswordResetEmail(auth, email)
  .then(() => {
    alert('please check your email then reset password')
  })
  .catch((error) => {
   
    const errorMessage = error.message;
    alert(errorMessage);
   
  });
}

    return (
        <div>
          <form className='mx-auto w-50' onSubmit ={handleSubmit}>
                <input type="email" name="email" id="email" ref={emailRef}  placeholder='Type Your Email' required /><br/>
                <input  type="password" name="password" id="password" placeholder='Type Your Password' required />
               <br />
               <p className='text-danger'>{error}</p>
               <input style={{backgroundColor:'greenyellow'}} type="submit" value="
               Submit" />
                <button onClick={resetPassword}>Forgate Password</button>
               <p>You Are New Please Register <Link to="/register">Register</Link></p>
               <p className='text-success'>{succes}</p>
            </form>
        </div>
    );
};

export default Login;