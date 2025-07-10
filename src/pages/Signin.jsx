import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../UserContext";

export default function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUserRole } = useUser();

  const handleSignIn = () => {
    const validUsers = ["user", "admin", "operations", "tech"];

    if (validUsers.includes(username.toLowerCase()) && password === "123") {
      setUserRole(username.toLowerCase());
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSignIn();
    }
  };

  return (
    <div className="flex justify-center items-center bg-[#55D6C2] w-screen h-lvh font-sanchez">
      <div className="flex flex-col w-[800px] h-[563px] bg-[#a8fff2] shadow-md items-center">
        <h1 className="text-4xl font-roboto font-extrabold italic mt-14 p-2 mb-6">
          Helpdesk System
        </h1>
        <p>Try logging in with the following:</p>
        <p>Username: user / admin / operations / tech</p>
        <p>Password: 123</p>

        <div className="flex flex-col mt-10 justify-center gap-5 items-center w-96">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={handleKeyDown}
            className="border-black border-[1px] p-2 w-96 shadow-md"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
            className="border-black border-[1px] p-2 w-96 shadow-md"
          />

          <button
            onClick={handleSignIn}
            className="mt-7 px-14 py-2 rounded-lg bg-[#03CC17] text-white cursor-pointer"
          >
            Sign in
          </button>

          <div className="flex justify-between items-center w-[375px] h-10">
            <Link to="/forgotpass" className="text-rose-600 font-semibold">
              Forgot password
            </Link>
            <Link to="/signup" className="text-xl font-semibold">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
