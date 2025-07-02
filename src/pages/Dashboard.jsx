import { useState } from "react";

export default function Dashboard() {
  const [stats] = useState([
    { label: "Total Tickets", value: 12, bgColor: "#2F82FF" },
    { label: "Total Solved", value: 8, bgColor: "#0BFF68" },
    { label: "Total Awaiting Approval", value: 2, bgColor: "#FE594E" },
    { label: "Total In Progress", value: 2, bgColor: "#FCFF6C" },
  ]);

  return (
    <div>
      <div className="flex items-center justify-center">
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
  );
}

function StatCard({ label, value, bgColor }) {
  return (
    <div
      className={`w-[200px] h-[230px] rounded-xl shadow-lg flex flex-col items-center justify-start text-[#05386B]`}
      style={{ backgroundColor: bgColor }}
    >
      <p className="font-sanchez mt-5 text-center whitespace-pre-line">
        {label}
      </p>
      <p className="text-7xl mt-16">{value}</p>
    </div>
  );
}
