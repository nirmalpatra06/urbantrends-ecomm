/* eslint-disable no-unused-vars */
import { FaArrowTurnDown } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import googleLogo from "../assets/googleLogo.png";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../redux/urbanTrendsSlice";
import { useState } from "react";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.urbanTrends.userInfo);
  const [name, setName] = useState("");
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        dispatch(
          addUser({
            _id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  function handleLogin() {
    dispatch(
      addUser({
        name: name,
      })
    );
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        toast.success("Sign Out Successfully!");
        dispatch(removeUser());
      })
      .catch((err) => {
        console.log(err);
        // An error happened.
      });
  };

  return (
    <div className="container w-full flex flex-col items-center justify-center gap-10 py-20">
      <div className="w-full flex flex-col items-center justify-center gap-10">
        <div>
          {userInfo ? (
            <div>
              <h1>{userInfo.name}</h1>
              <div className="rounded-full w-20 h-20">
                {/* <img
                  className="rounded-full w-20 h-20 object-cover"
                  src={userInfo.image}
                  alt="userImg"
                /> */}
              </div>
            </div>
          ) : (
            <div className=" flex  flex-col gap-10">
              <div
                onClick={handleGoogleLogin}
                className="text-base w-60 h-12 tracking-wide border border-gray-400 rounded-md flex justify-center items-center gap-2 hover:border-blue-600 cursor-pointer duration-300"
              >
                <img className="w-8" src={googleLogo} alt="google" />
                <span className="text-sm text-gray-900">
                  Sign in with Google
                </span>
              </div>
              <span>
                If Sign up with Google isn't working Don't worry Try here 👇
              </span>

              <div className="h-[400px]">
                <input
                  type="email"
                  placeholder="Enter Gmail here"
                  onChange={(e) => setName(e.target.value)}
                />
                <input type="password" placeholder="Enter Password" />
                <button className="bg-red-200" onClick={handleLogin}>
                  Go
                </button>
              </div>
            </div>
          )}
        </div>
        {userInfo && (
          <div>
            <button
              onClick={handleSignOut}
              className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default Login;
