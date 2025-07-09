import { useState } from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import barchat from "../assets/barchart.png";
import help from "../assets/help.png";
import online from "../assets/online.png";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex text-white text-2xl">
      {Array(fullStars)
        .fill()
        .map((_, i) => (
          <FaStar key={`full-${i}`} />
        ))}
      {halfStar && <FaStarHalfAlt />}
      {Array(emptyStars)
        .fill()
        .map((_, i) => (
          <FaRegStar key={`empty-${i}`} />
        ))}
    </div>
  );
};

export default function Dashboard() {
  return (
    <div>
      <Dashboards />
    </div>
  );
}

function Dashboards() {
  const [stats] = useState([
    { label: "Total Tickets", value: 12, bgColor: "#2F82FF" },
    { label: "Total Solved", value: 8, bgColor: "#0BFF68" },
    { label: "Total Awaiting Approval", value: 2, bgColor: "#FE594E" },
    { label: "Total In Progress", value: 2, bgColor: "#FCFF6C" },
  ]);

  const user = "operations";

  return (
    <>
      <div className="h-full overflow-hidden">
        <div
          className={`flex  ${
            user === "operations"
              ? "items-start"
              : "items-center justify-center"
          }`}
        >
          <div className="text-3xl font-sanchez">Dashboard</div>
        </div>

        <div className="flex my-7 mx-11 gap-11 items-center justify-start font-sanchez">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              label={stat.label}
              value={stat.value}
              bgColor={stat.bgColor}
            />
          ))}
        </div>
      </div>
      {user === "operations" && (
        <div className="flex justify-start items-start gap-12">
          <div className="w-[450px] h-[285px] bg-[#55D6C2] ml-12 flex justify-center items-center">
            <img src={barchat} alt="barchat" className="w-[200px]"></img>
          </div>
          <div className="flex flex-col gap-3 font-sanchez">
            <div className="w-[470px] h-[180px] bg-[#55D6C2] flex justify-center items-center gap-14">
              <div className="flex flex-col items-center ">
                <img src={online} alt="online" className="w-[120px]"></img>
                <p className="text-[#05386B] text-2xl leading-none m-0">3</p>
                <p className="text-lg leading-none m-0">Technical Supports</p>
              </div>
              <div className="flex flex-col items-center ">
                <img src={help} alt="online" className="w-[108px]"></img>
                <p className="text-[#05386B] text-2xl leading-none m-0">4</p>
                <p className="text-lg  leading-none m-0">Operation Team</p>
              </div>
            </div>
            <div className="w-[470px] h-[90px] rounded-lg bg-[#55D6C2] flex flex-col gap-3 items-center">
              <p className="font-sanchez leading-none m-0 mt-2 text-xl">
                Customer Feedback
              </p>
              <StarRating rating={4.5} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function StatCard({ label, value, bgColor }) {
  return (
    <div
      className={`w-[200px] h-[200px] rounded-xl shadow-lg flex flex-col items-center justify-start text-[#05386B]`}
      style={{ backgroundColor: bgColor }}
    >
      <p className="font-sanchez mt-5 text-center whitespace-pre-line">
        {label}
      </p>
      <p className="text-7xl mt-16">{value}</p>
    </div>
  );
}
