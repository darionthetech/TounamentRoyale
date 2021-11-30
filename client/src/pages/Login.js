// import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { ADD_USER } from '../utils/mutations';
// import Auth from '../utils/auth';


// const SignupForm = () => {
//     const [userData, setUserData] = useState({ username: '', email: '', password: '' });
//     const [addUser] = useMutation(ADD_USER);
//     const [validated] = useState();

//     const handleInputChange = (event) => {
//         const {name, value } = event.target;
//         setUserData({ ...userData, [name]: value });
//     };

//     const handleFormSubmit = async (event) => {
//         event.preventDefault();

//         // const div = event.currentTarget;
//         // if (div.checkValidity() === false) {
//         //   event.preventDefault();
//         //   event.stopPropagation();
//         // }

//         try {
//             const { data } = await addUser({
//                 variables: { ...userData },
//             });
//             console.log(data);
//             Auth.login(data.addUser.token);
//         } catch (err) {
//         console.error(err);


//     }

//     // setUserData({
//     //     username: '',
//     //     email: '',
//     //     password: '',
//     // });
// };

//     return (
//         <>
//         <div className="container"  noValidate validated={validated} onSubmit={handleFormSubmit}>
//             <div className="app-wrapper">
//                 <div>
//                     <h2 className="title">Create Account</h2>
//                 </div>
//                  <form className="form-wrapper">
//                      <div className="name">
//                          <label  className="label">Full Name</label>
//                          <input className="input"  onChange={handleInputChange}   type="text" />
//                      </div>
//                      <div className="email">
//                          <label className="label">Email</label>
//                          <input className="input" onChange={handleInputChange}   type="email" />
//                      </div>
//                      <div className="password">
//                          <label className="label">Password</label>
//                          <input className="input" onChange={handleInputChange}  type="password" />
//                      </div>
//                      <div>
//                          <button type="submit" variant="success" className="submit">Submit</button>
//                      </div>
//                  </form>
//             </div>
//         </div>
//         </>
//     );
// };

// export default SignupForm;

import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [addUser, { error }] = useMutation(ADD_USER);

  useEffect(() => {
    if (error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [error]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await addUser({
        variables: { ...userFormData },
      });
      console.log(data);
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <>
      {/* This is needed for the validation functionality above */}
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your signup!
        </Alert>

        <Form.Group>
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your username"
            name="username"
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
          <Form.Control.Feedback type="invalid">
            Username is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Your email address"
            name="email"
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type="invalid">
            Email is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Your password"
            name="password"
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type="invalid">
            Password is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={
            !(
              userFormData.username &&
              userFormData.email &&
              userFormData.password
            )
          }
          type="submit"
          variant="success"
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default SignupForm;