import React from 'react';

const Register = () => {
    return (
        <div>
            <form >
                <input type="email" name="email" id="email" placeholder='Type Your Email' /><br/>
                <input type="password" name="password" id="password" placeholder='Type Your Password' />
               <br />
               <input style={{backgroundColor:'greenyellow'}} type="submit" value="Register" />
            </form>
           
        </div>
    );
};

export default Register;