import React from "react";
import { auth } from "../utilis/firebase";
import {signOut} from "firebase/auth"
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect} from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser,removeUser } from "../utilis/userSlice";

const Header = () => {
  const user=useSelector(store=>store.user)
  const navigate=useNavigate()
  const dispatch=useDispatch()
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const { uid, email, displayName } = user;
            dispatch(addUser({ uid, email, displayName }));
            navigate("/browse")
          } else {
            dispatch(removeUser());
            navigate("/")
          }
        });
      }, []);
  const handleSignOut=()=>{
    signOut(auth).then(() => {
     
    }).catch((error) => {
      navigate("/error")
    });
  }
  return (
    <div className="absolute z-10 px-6 py-4 bg-gradient-to-b from-white w-full flex justify-between items-center">
      {/* Left Side - Netflix Logo */}
      <img
        className="w-40"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="Netflix Logo"
      />

      {user && (<div>
        <button onClick={handleSignOut}
        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
          Sign Out
        </button>
        <p>{user.displayName}</p>
      </div>)}
    </div>
  );
};

export default Header;
