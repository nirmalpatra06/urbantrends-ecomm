/* eslint-disable no-unused-vars */
import { ToastContainer, toast } from "react-toastify";
import githubLogo from "../assets/githubLogo.png";
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
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.urbanTrends.userInfo);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
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

  return (
    <div className="container w-full flex flex-col items-center justify-center gap-10 py-20">
      <div className="w-full flex flex-col items-center justify-center gap-10">
        <div>
          {userInfo ? (
            <div>
              <h1>{userInfo.name}</h1>
              <div className="rounded-full w-20 h-20">
                <img
                  className="rounded-full w-20 h-20 object-cover"
                  src={userInfo.image}
                  alt="userImg"
                />
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
              <div
                onClick={() =>
                  alert("Its not working Please Go with Google :)")
                }
                className="text-base w-60 h-12 tracking-wide border border-gray-400 rounded-md flex justify-center items-center gap-2 hover:border-blue-600 cursor-pointer duration-300"
              >
                <img className="w-8" src={githubLogo} alt="github" />
                <span className="text-sm text-gray-900">
                  Sign in with GitHub
                </span>
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
