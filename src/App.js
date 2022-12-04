
import './App.css';
import app from './firebase.init';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from 'react';
const auth = getAuth(app)

function App() {
  const [user,setuser] = useState({})
 
  const googleprovider = new GoogleAuthProvider ();
  const githubprovider = new GithubAuthProvider ();
  const githandl = () =>{
    signInWithPopup(auth,githubprovider)
    .then(result =>{
      const user = result.user;
      setuser(user)
      console.log(user)
    })
    .catch(error =>{
      console.error(error)
    })
  }
  const signout = () =>{
    signOut(auth)
    .then( ()=>{
      setuser({})
    })
    .catch()
  }
  const hndlclick = () =>{
    console.log("working")
    signInWithPopup(auth,googleprovider)
    .then(result =>{
      const user = result.user;
      setuser(user)
      console.log(user);
     })
     .catch(error=>{
      console.log(error);
     })
  }
  return (
    <div className="App">
      {
        user.uid?<button onClick={signout}> signout</button>:
       <div>
         <button onClick={hndlclick}> google sign in</button><button onClick={githandl}> github sign in</button>
       </div>
        
      }
      <h1> user :{user.displayName} </h1>
      <h1>mail : {user.email} </h1>
      <img src= {user.photoURL} alt="" />
     
    </div>
  );
}

export default App;
