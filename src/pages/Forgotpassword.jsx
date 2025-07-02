import { Link } from "react-router-dom";
export default function Forgotpassword() {
  return (
    <div className="flex justify-center items-center bg-[#55D6C2] w-screen h-lvh font-roboto">
      <div className="flex flex-col w-[800px] h-[563px] bg-[#a8fff2] shadow-md items-center justify-center">
        <p className=" ">Don’t worry, Enter your email below and we will</p>
        <div className="items-center">send you a link to change password.</div>
        <input
          type="text"
          placeholder="Email"
          className="border-black border-[1px] p-2 w-96 shadow-md mt-7"
        ></input>
        <div className="flex flex-col gap-3 ">
          <Link to="/dashboard">
            <button className="mt-7 px-14 py-2 rounded-lg bg-[#03CC17] text-white cursor-pointer">
              Submit
            </button>
          </Link>
          <Link to="/">
            <button className=" px-14 py-2 rounded-lg bg-[#0769DC] text-white cursor-pointer">
              Sign in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
