import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    createUser(email, password).then((result) => {
      const user = result.user;
      updateUser({ displayName: name, photoURL: photo })
        .then(() => {
          setUser({ ...user, displayName: name, photoURL: photo });
        })
        .catch((error) => {
          const errorMsg = error.message;
          alert("Error Khaiche", errorMsg);
          setUser(user);
        });
    });
  };
  return (
    <div>
      <div className="flex justify-center items-center flex-1 min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
          <h2 className="text-2xl font-semibold text-center">
            Register Your Account
          </h2>
          <div className="card-body">
            <form onSubmit={handleRegister} action="">
              <fieldset className="fieldset">
                {/* email  */}
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input"
                  name="name"
                  required
                  placeholder="Your Name"
                />
                {/* email  */}
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  name="email"
                  required
                  placeholder="Email"
                />
                {/* photo  */}
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  className="input"
                  name="photo"
                  required
                  placeholder="URL"
                />
                {/* password  */}
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  name="password"
                  required
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary mt-4 text-base-100"
                >
                  Register
                </button>
                <p className="font-semibold">
                  Already have an account? Please{" "}
                  <Link to={"/auth/login"}>
                    <span className="text-blue-500  ">Login</span>
                  </Link>{" "}
                  now.{" "}
                </p>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
