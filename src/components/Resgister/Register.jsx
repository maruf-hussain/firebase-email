import React, { useRef, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import app from '../../Firebase/firebase-config';
import { Link } from 'react-router-dom';



const auth = getAuth(app);

const Register = () => {
 const [error , setError] = useState('');
 const [succes, setSucces] = useState('');  




const handleSubmit = (event) => {
  event.preventDefault();
  setSucces('');
  const email = event.target.email.value;
  const password = event.target.password.value;
  console.log(email,password);

  createUserWithEmailAndPassword(auth,email,password)
  .then(result => {
   const loggedUser = result.user;
   console.log(loggedUser);
   setSucces('User has create succesfully');
   setError('');
   event.target.reset();
   sendVarificationEmail(result.user);

  })
  .catch(error => {
    console.log('errror', error.message)
    setError('Please write keyword')
    
    
  })

}
const sendVarificationEmail = (user) =>{
  sendEmailVerification(user)
  .then(result => {
    console.log(result)
    alert('Please varify your email check your mail inbox or spam folder')
  })
}





    return (
        <div>
            <form className='mx-auto w-50' onSubmit ={handleSubmit}>
                <input type="email" name="email" id="email" placeholder='Type Your Email' required /><br/>
                <input  type="password" name="password" id="password" placeholder='Type Your Password' required />
               <br />
               <p className='text-danger'>{error}</p>
               <input style={{backgroundColor:'greenyellow'}} type="submit" value="Register" /><br/>
               
               <p>You Are Already Register Please Login <Link to="/login">Login</Link></p>

               <p className='text-success'>{succes}</p>
            </form>
           
        </div>
    );
};

export default Register;