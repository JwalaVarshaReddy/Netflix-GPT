import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { auth } from "../utilis/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { RouterProvider } from "react-router";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utilis/userSlice";
const Body = () => {
    const dispatch=useDispatch()
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const { uid, email, displayName } = user;
            dispatch(addUser({ uid, email, displayName }));
          } else {
            dispatch(removeUser());
          }
        });
      }, []);
    
      return (
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/browse" element={<Browse />} />
          </Routes>
        </Router>
      );
    };
    
export default Body;
