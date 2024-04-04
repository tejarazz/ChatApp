import GenderCheckbox from "./GenderCheckbox";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto max-w-96">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center mb-4 text-gray-300">
          Signup
          <span className="pl-2 text-blue-500">ChatApp</span>
        </h1>

        <form action="">
          <div>
            <label className="">
              <span className="text-base label-text ">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full input input-boardered h-10"
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
            />
          </div>
          <div>
            <label className="">
              <span className="text-base label-text ">Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              className="w-full input input-boardered h-10"
            />
          </div>
          <div>
            <label className="">
              <span className="text-base label-text ">Confirm Password</span>
            </label>
            <input
              type="text"
              placeholder="Confirm Password"
              className="w-full input input-boardered h-10"
            />
          </div>
          <GenderCheckbox />
          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600  mt-2 inline-block"
          >
            Already have an account?
          </a>
          <div className="btn btn-block btn-sm mt-2 border border-slate-700">
            Sign Up
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
