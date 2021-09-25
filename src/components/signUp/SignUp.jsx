
import {Form, Button} from 'react-bootstrap';
import firebaseApp from './firebaseConfig';
import { useRef, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



const auth = getAuth(firebaseApp);

const SignUp = () =>{
    const [newUser, setNewUser] = useState(true);
    const [user, setUser] = useState({
      isSignedIn : false,
      email: '',
      name: ''

    });
    const emailRef = useRef();
    const passRef = useRef();
    const nameRef = useRef();
    const handleSubmit = (e) =>{
      
        e.preventDefault();
    if (newUser && emailRef.current.value && passRef.current.value){
        createUserWithEmailAndPassword(auth, emailRef.current.value,  passRef.current.value)
  .then((res) => {
    // Signed in 
    // const user = userCredential.user;
   const newUserInfo = {...user};
   newUserInfo.isSignedIn = true;
   newUserInfo.email = res.user.email;
   newUserInfo.name = res.user.displayName;
    setUser(newUserInfo);
    console.log(newUserInfo);
    console.log(res.user.displayName);
    console.log(res);
    alert('new user created')
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
  });
    }  

    }
    console.log(user);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" ref={nameRef} placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" ref={emailRef} placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passRef} placeholder="Enter email" required/>
                </Form.Group>
                <Button type="submit">Submit</Button>
                </Form>
                </div>
            </div>
        </div>
      
    )
}

export default SignUp;