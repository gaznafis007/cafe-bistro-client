import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({ email, password });
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="grid grid-cols-1 place-content-center min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row gap-4">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-amber-950">Login now!</h1>
        </div>
        <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
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
                New to our website?
                <Link to="/signup" className="label-text-alt link link-hover">
                  Register
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-amber-950">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
