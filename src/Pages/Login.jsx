import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { signIn } = use(AuthContext);
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signIn(email,password)
      .then((result) => {
        alert("Signed In Successfully");
      })
      .catch((error) => {
        alert("Something is wrong");
      });
  };

  return (
    <div className="flex justify-center items-center flex-1 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="text-2xl font-semibold text-center">
          Login Your Account
        </h2>
        <div className="card-body">
          <form onSubmit={handleLogIn} action="">
            <fieldset className="fieldset">
              {/* email  */}
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                name="email"
                placeholder="Email"
              />
              {/* password  */}
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                name="password"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button type="submit" className="btn btn-primary mt-4">
                Login
              </button>
              <p className="font-semibold">
                Don't have an account? Please{" "}
                <Link to={"/auth/register"}>
                  <span className="text-blue-500  ">Register</span>
                </Link>{" "}
                now.{" "}
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
