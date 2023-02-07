import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center  bg-purple-900">
      <form
        className=" bg-white flex flex-col px-5 py-10
      shadow-2xl rounded-xl"
      >
        <h1 className="text-center text-purple-800 text-2xl -mt-5 underline underline-offset-2 font-mono">
          Login
        </h1>
        <div className="flex flex-col space-y-5 p-5 rounded-xl">
          <input
            type="text"
            placeholder="Full Name"
            className="border border-b-blue-900 outline-none rounded-sm placeholder:px-1 h-8"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-b-blue-900 outline-none rounded-sm placeholder:px-1 h-8"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-b-blue-900 outline-none rounded-sm placeholder:px-1 h-8"
            required
          />
          <input
            type="text"
            placeholder="Contact"
            className="border border-b-blue-900 outline-none rounded-sm placeholder:px-1 h-8"
            required
          />
          <button type="submit" className="bg-purple-800 text-white py-1 rounded-sm shadow-md hover:bg-purple-900 hover:tracking-wider font-mono">
            Submit
          </button>
          <div className="flex justify-center items-center">
            <p>already have an account?</p>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
