import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import Lottie from "lottie-react";

import siteInfo from "../../../siteInfo";
import SignupAnimation from "../../assets/json/signup-animation.json";
import { setCurrentUser } from "../../store/reducers/usersReducers";
import { toast } from "react-toastify";

const Login = () => {
  const api = siteInfo.api + "/users/login";
  const [isLoading, setIsLoding] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoding(true);

    const data = {
      email: e.target.email.value,
      pass: e.target.pass.value,
    };

    axios
      .post(api, data)
      .then((res) => {
        const user = res.data;
        dispatch(setCurrentUser(user));
        localStorage.setItem("crmUserId", JSON.stringify(res.data.id));
        navigate('/');
        setIsLoding(false);
      })
      .catch((error) => {
        setIsLoding(false);
        toast.error(error.response.data.message);
      });
  };

  return (
    <div className="w-full">
      {/* Login form section start here  */}
      <div className="block w-3/5 mx-auto mt-4 rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div className="border-b-2 border-slate-200 text-start px-4 rounded-t-md py-3 bg-neutral-200 dark:border-neutral-600 dark:text-neutral-50">
          Login
        </div>
        {/* Log in form body and animation section  */}
        <section className="flex ">
          {/* Animation  */}
          <div className="w-2/5  ">
            <Lottie animationData={SignupAnimation} />
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-6 items-start mt-7 flex flex-col rounded-b-md font-semibold"
          >
            <div className="flex gap-3">
              <h3 className="w-36 "> E-Mail Address </h3>
              <div className="relative mb-3" data-te-input-wrapper-init>
                <input
                  type="email"
                  name={"email"}
                  className="w-80 py-2 border hover:bg-yellow-100 "
                  placeholder=" Enter your email"
                  required
                />
              </div>
            </div>

            <div className="flex gap-3">
              <h3 className="w-36 text-center"> Password</h3>
              <div>
                <input
                  type="password"
                  name={"pass"}
                  className="w-80 py-2 border hover:bg-yellow-100"
                  placeholder=" Enter your password"
                  required
                />

                <div>
                  <div className="float-left mt-3">
                    {isLoading && <h1>loading...</h1>}
                    <input
                      value={isLoading ? "Loading..." : "Login"}
                      type="submit"
                      className="  bg-sky-600 border-none text-neutral-100 px-4 py-2 rounded-md hover:bg-sky-800"
                    />
                    {/* <Link to={"/"} className="text-blue-500">
                      {" "}
                      Forgot your password ?{" "}
                    </Link> */}
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Login;
