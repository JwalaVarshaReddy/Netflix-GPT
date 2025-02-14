import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import { checkValidation } from "../utilis/checkValidation";
import { updateProfile,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utilis/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utilis/userSlice";
const Login = () => {
  const dispatch=useDispatch
  const navigate=useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const name=useRef(null);
  const handleSignUp = () => {
    setIsSignUp(!isSignUp);
  };
  const Validate = () => {
    const result = checkValidation(email.current.value, password.current.value);
    setErrorMessage(result);
  
    if (isSignUp) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user=userCredential.user;
          updateProfile(user, {
            displayName: name.current.value
          })
          .then(() => {
            const { uid, email, displayName } = auth.currentUser;
                        dispatch(
                          addUser({ uid, email, displayName }));
            navigate("/browse");
          })
          .catch((error) => {
            setErrorMessage(error.message)
          });
            
        })
        .catch((error) => {
          setErrorMessage(error.code + " - " + error.message);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          navigate("/browse");  // ✅ Navigate after login
        })
        .catch((error) => {
          setErrorMessage(error.code + " - " + error.message);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/638e9299-0637-42d1-ba39-54ade4cf2bf6/web/US-en-20250203-TRIFECTA-perspective_27777f6b-02df-44af-bd1d-0bd4efdf3345_large.jpg"
          alt="logo"
        ></img>
      </div>
      <form
        className="w-3/12  p-12  my-36 absolute bg-black mx-auto right-0 left-0 text-white bg-opacity-75"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-lg border-white">
          {!isSignUp ? "Sign In" : "Sign Up"}
        </h1>
        {isSignUp && (
          <input
          ref={name}
            type="text"
            placeholder="name"
            className="p-2 m-2 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="email"
          className="p-2 m-2 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="password "
          className="p-2 m-2 w-full bg-gray-700"
        />
        <p className="p-2 text-red-600">{errorMessage}</p>
        <button
          className="p-2 m-4 bg-red-800 w-full rounded-lg"
          onClick={Validate}
        >
          {!isSignUp ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={handleSignUp}>
          {!isSignUp ? "New to Netflix? Sign up now" : "Already a user?Sign In"}{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
