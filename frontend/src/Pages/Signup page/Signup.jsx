import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import UseSignup from "../../hooks/UseSignup";

const Signup = () => {
  const [inputs, setinputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = UseSignup();

  const handleCheckboxChanges = (gender) => {
    setinputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };
  return (
    <div className="flex flex-col items-center justify-center mx-auto max-w-96">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-700">
        <h1 className="text-3xl font-semibold text-center mb-4 text-gray-300">
          Signup
          <span className="pl-2 text-blue-500">ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="">
              <span className="text-base label-text ">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full input input-boardered h-10"
              value={inputs.fullName}
              onChange={(e) =>
                setinputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="">
              <span className="text-base label-text ">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username "
              className="w-full input input-boardered h-10"
              value={inputs.username}
              onChange={(e) =>
                setinputs({ ...inputs, username: e.target.value })
              }
            />
          </div>
          <div>
            <label className="">
              <span className="text-base label-text ">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-boardered h-10"
              value={inputs.password}
              onChange={(e) =>
                setinputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <div>
            <label className="">
              <span className="text-base label-text ">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-boardered h-10"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setinputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>
          <GenderCheckbox
            onCheckboxChange={handleCheckboxChanges}
            slectedGender={inputs.gender}
          />
          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-600  mt-2 inline-block"
          >
            Already have an account?
          </Link>
          <button
            className="btn btn-block btn-sm mt-2 border border-slate-700"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner "></span>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
