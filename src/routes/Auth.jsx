import React, { useRef, useState } from "react";
import styled from "styled-components";
import { authService, firebaseInstance } from "../myFirebase";

const ReadOnly = styled.h1`
  position: absolute;
  top: -9999px;
  left: -9999px;
  z-index: -1;
  width: 1px;
  height: 1px;
  overflow: hidden;
  visibility: hidden;
`;

const Auth = () => {
  const formRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
      } else {
        data = await authService.signInWithEmailAndPassword(email, password);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleOnchange = (event) => {
    const {
      target: { value, name },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const toggleAccout = () => setNewAccount((prev) => !prev);

  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "Google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "Github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    const data = await authService.signInWithPopup(provider);
    console.log(data);
  };

  return (
    <section>
      <ReadOnly>Login Screen</ReadOnly>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input
          onChange={handleOnchange}
          name="email"
          type="email"
          placeholder="Email"
          required
        />
        <input
          onChange={handleOnchange}
          name="password"
          type="password"
          placeholder="Password"
          required
        />
        <input type="submit" value={newAccount ? "Create Account" : "Log In"} />
        {error}
      </form>
      <button type="button" onClick={toggleAccout}>
        {newAccount ? "Sign In" : "Create Account"}
      </button>
      <div>
        <button onClick={onSocialClick} name="Google" type="button">
          Continue with Google
        </button>
        <button onClick={onSocialClick} name="Github" type="button">
          Continue with Github
        </button>
      </div>
    </section>
  );
};
export default Auth;
