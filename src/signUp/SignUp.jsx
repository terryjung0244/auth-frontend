import React, { useState } from "react";

const SignUp = () => {
  const [signUpInput, setSignUpInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSignUpInput = (e) => {
    const { name, value } = e.target;
    setSignUpInput({ ...signUpInput, [name]: value });
  };

  const handleSignUp = async () => {
    const response = await fetch("http://localhost:8080/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signUpInput),
    });
    const result = await response.json();
    console.log(result);
  };

  return (
    <div>
      <h2>SignUp</h2>
      <div style={{ display: "flex", flexDirection: "column", width: "300px" }}>
        <input
          placeholder="firstName"
          name="firstName"
          value={signUpInput.firstName}
          onChange={handleSignUpInput}
        />
        <input
          placeholder="lastName"
          name="lastName"
          value={signUpInput.lastName}
          onChange={handleSignUpInput}
        />
        <input
          placeholder="email"
          name="email"
          value={signUpInput.email}
          onChange={handleSignUpInput}
        />
        <input
          placeholder="password"
          name="password"
          value={signUpInput.password}
          onChange={handleSignUpInput}
        />
        <button onClick={handleSignUp}>Sign Up</button>
      </div>
    </div>
  );
};

export default SignUp;
