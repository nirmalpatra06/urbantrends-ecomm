/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
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
  const [user, setUser] = useState("");
  const [userError, setUserError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailEroor] = useState(false);
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

  function handleInput(e) {
    const item = e.target.value;
    setUser(item);
    if (item.length <= 3) {
      setUserError(true);
    } else {
      setUserError(false);
    }
    // console.log(user);
  }
  function handleEmail(e) {
    const email_pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setEmail(e.target.value);
    if (!email_pattern.test(email)) {
      setEmailEroor(true);
    } else {
      setEmailEroor(false);
    }
  }

  function handleValidation(e) {
    e.preventDefault();
    if (user && email) {
      dispatch(
        addUser({
          name: user,
          email: email,
        })
      );
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }

    // setErrors(Validation(values));
  }

  return (
    <div className="container w-full flex flex-col  items-center justify-center gap-10 py-20">
      <div className="w-full flex flex-col items-center justify-center gap-10">
        <div>
          {userInfo ? (
            <div className="flex flex-col items-center gap-4">
              <p className="font-protestRiot text-3xl">Welcome !</p>
              <div className="rounded-full w-20 h-20">
                <img
                  className="rounded-full w-20 h-20 object-cover"
                  src="https://picsum.photos/200"
                  alt="userImg"
                />
              </div>
              <h1 className="font-protestRiot text-2xl">{userInfo.name}</h1>
              <h2 className="font-protestRiot text-2xl">{userInfo.email}</h2>
            </div>
          ) : (
            <div className=" flex items-center  flex-col gap-10">
              <div
                onClick={handleGoogleLogin}
                className="text-base w-60 h-12 tracking-wide border border-gray-400 rounded-md flex justify-center items-center gap-2 hover:border-blue-600 cursor-pointer duration-300"
              >
                <img className="w-8" src={googleLogo} alt="google" />
                <span className="text-sm text-gray-900">
                  Sign in with Google
                </span>
              </div>
              <div className="w-[90vw] flex items-center flex-col gap-2">
                <span className="text-center font-protestRiot">
                  If Sign up with Google isn't working Don't worry Try here 👇
                </span>
                <form
                  onSubmit={handleValidation}
                  className="flex shadow-md flex-col items-center p-6 w-[350px] md:w-[400px] rounded-md bg-orange-100 gap-4"
                >
                  {/* <h1>Registration</h1> */}
                  <div className="flex flex-col font-bold">
                    <label htmlFor="name">Name:</label>
                    <input
                      onChange={handleInput}
                      type="text"
                      value={user}
                      placeholder="Enter Name"
                      className="w-[300px] p-2 rounded-md outline-none"
                    />
                    {userError ? (
                      <p className="text-red-500 mt-1 font-protestRiot">
                        Atleast 4 Character
                      </p>
                    ) : user.length === 0 ? (
                      ""
                    ) : (
                      <p className="text-green-500 mt-1 font-protestRiot">
                        Alright 👍
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col font-bold">
                    <label htmlFor="email">Email:</label>
                    <input
                      onChange={handleEmail}
                      value={email}
                      type="email"
                      placeholder="Enter Email"
                      className="w-[300px] p-2 rounded-md outline-none"
                    />
                    {emailError ? (
                      <p className="text-red-500 mt-1 font-protestRiot">
                        Email is not Valid
                      </p>
                    ) : email.length === 0 ? (
                      ""
                    ) : (
                      <p className="text-green-500 mt-1 font-protestRiot">
                        Done
                      </p>
                    )}
                  </div>
                  {/* <div className="flex flex-col font-bold">
                    <label htmlFor="password">Password:</label>
                    <input
                      onChange={handlePassword}
                      value={password}
                      type="password"
                      placeholder="Enter Password"
                      className="w-[300px] p-2 rounded-md outline-none"
                    />
                    {passwordError ? (
                      <p className="text-red-500 mt-1 font-protestRiot">
                        Must be 8 Character
                      </p>
                    ) : password.length === 0 ? (
                      ""
                    ) : (
                      <p className="text-green-500 mt-1 font-protestRiot">
                        Done
                      </p>
                    )}
                  </div> */}

                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-800 hover:text-white font-protestRiot duration-300 text-black shadow-xl py-2 px-4 text-xl rounded-md"
                  >
                    Sign in
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
        {userInfo && (
          <div>
            <button
              onClick={handleSignOut}
              className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md font-protestRiot hover:bg-gray-700 duration-300"
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
