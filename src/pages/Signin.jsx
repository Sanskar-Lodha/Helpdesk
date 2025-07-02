// import { Link } from "react-router-dom";

// export default function Signin() {
//   return (
//     <div className="flex justify-center items-center bg-[#55D6C2] w-screen h-lvh font-roboto">
//       <div className="flex flex-col w-[800px] h-[563px] bg-[#a8fff2] shadow-md items-center">
//         <h1 className="text-4xl font-roboto font-extrabold italic mt-14 p-2 mb-6">
//           Helpdesk System
//         </h1>
//         <div className="flex flex-col mt-20 justify-center gap-5 items-center w-96 h-36">
//           <input
//             type="text"
//             placeholder="Username"
//             className="border-black border-[1px] p-2 w-96 shadow-md"
//           ></input>
//           <input
//             type="text"
//             placeholder="Password"
//             className="border-black border-[1px] p-2 w-96 shadow-md"
//           ></input>
//           <button className="mt-7 px-14 py-2 rounded-lg bg-[#03CC17] text-white cursor-pointer">
//             <Link to="/dashboard">Sign in</Link>
//           </button>
//           <div className=" flex justify-between items-center w-[375px] h-10">
//             <button className="text-rose-600 font-semibold">
//               <Link to="/forgotpass">Forgot password</Link>
//             </button>
//             <button className="text-xl font-semibold">
//               <Link to="/signup">Sign Up</Link>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = () => {
    if (username === "sanskar" && password === "123") {
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
        <p>Use Username- sanskar</p>
        <p> password- 123</p>

        <div className="flex flex-col mt-20 justify-center gap-5 items-center w-96 h-36">
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
