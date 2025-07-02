import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import edit from "../assets/editing.png";
import user from "../assets/user.png";

export default function UserProfile() {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleSubmit = () => {
    alert(`Feedback Submitted!\nRating: ${rating}\nMessage: ${feedback}`);
    setFeedback("");
    setRating(0);
  };

  return (
    <>
      <h2 className="text-2xl  mb-6">User Profile</h2>
      <div className="h-[520px] bg-[#55D6C2] p-8 font-sanchez">
        <div className="flex flex-wrap gap-6">
          <div className="bg-white p-6 rounded-2xl shadow w-[400px] h-[350px]">
            <div className=" text-gray-500 cursor-pointer ml-80 ">
              <Link to="/edituser">
                <img src={edit} alt="tst" className="w-[25px] h-[25px]"></img>
              </Link>
            </div>
            <div className="flex flex-col items-center gap-4">
              <img src={user} alt="text" className="w-[100px]"></img>
              <div className="mr-28 mt-6 space-y-1 text-start">
                <p>Username:</p>
                <p>Contact Number:</p>
                <p>Email:</p>
                <p>Department:</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow w-[400px] h-[200px]">
            <h3 className=" mb-2 text-sm text-center">Give Your Feedback</h3>
            <input
              placeholder="[Lorem Ipsum]"
              className="w-full border border-gray-400 rounded p-2 text-sm mb-3"
              rows={3}
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />

            {/* Rating */}
            <div className="flex justify-center text-xl text-yellow-400 mb-4">
              {[1, 2, 3, 4, 5].map((star) =>
                star <= (hover || rating) ? (
                  <FaStar
                    key={star}
                    className="cursor-pointer"
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                    onClick={() => setRating(star)}
                  />
                ) : (
                  <FaRegStar
                    key={star}
                    className="cursor-pointer"
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                    onClick={() => setRating(star)}
                  />
                )
              )}
            </div>

            <button
              onClick={handleSubmit}
              className="bg-[#55D6C2]  px-4 py-2 rounded hover:bg-[#40c4b2] text-sm w-full"
            >
              Submit Feedback
            </button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
