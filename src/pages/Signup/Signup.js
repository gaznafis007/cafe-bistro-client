import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Signup = () => {
  const navigate = useNavigate();
  const { signUp, getProfile, logOut } = useContext(AuthContext);
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const profile = {
      name,
      email,
      password,
    };
    console.log(profile);
    signUp(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        getProfile(name).then((result) => {
          console.log(result);
          logOut();
          navigate("/login");
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="grid grid-cols-1 place-content-center min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row gap-4">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-amber-950">Signup!</h1>
        </div>
        <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="username"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                Already have an account?
                <Link to="/login" className="label-text-alt link link-hover">
                  Login
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-amber-950">Signup</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
