import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="flex justify-center items-center bg-[#55D6C2] w-screen h-lvh font-roboto">
      <div className="flex flex-col w-[800px] h-[563px] bg-[#a8fff2] shadow-md items-center">
        <h1 className="text-4xl font-roboto font-extrabold italic mt-14 p-2 mb-3">
          Helpdesk System
        </h1>
        <div className="flex justify-center items-center mb-10">
          <p className="text-lg font-roboto">Sign up here</p>
        </div>
        <div className="flex flex-col my-20 justify-center gap-5 items-center w-96 h-36">
          <input
            type="text"
            placeholder="Username"
            className="border-black border-[1px] p-2 w-96 shadow-md"
          ></input>
          <input
            type="text"
            placeholder="Password"
            className="border-black border-[1px] p-2 w-96 shadow-md"
          ></input>
          <input
            type="text"
            placeholder="Email"
            className="border-black border-[1px] p-2 w-96 shadow-md"
          ></input>
          <Link to="/">
            <button className="mt-7 px-14 py-2 rounded-lg bg-[#296EF2] text-white cursor-pointer">
              Sign Up
            </button>
          </Link>
          <div className=" flex justify-between items-center w-[375px] h-10">
            <button className="text-rose-600 font-semibold">
              <Link to="/forgotpass">Forgot password</Link>
            </button>
            <button className="text-xl font-semibold">
              <Link to="/">Sign In</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
