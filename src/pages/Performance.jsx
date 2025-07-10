import { FaStar } from "react-icons/fa";
import { useUser } from "../UserContext";

export default function PerformanceDashboard() {
  const { userRole } = useUser();

  return (
    <div className="p-8 font-sans">
      <h2 className="text-2xl font-semibold mb-6">Performance</h2>

      <div className="flex flex-wrap gap-10">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-gray-300 w-40 h-40 rounded-lg flex items-center justify-center">
              <span className="text-7xl">👤</span>
            </div>
            <div className="flex flex-col justify-between gap-20">
              <h3 className="text-3xl">
                {userRole === "tech"
                  ? "Technical Support"
                  : userRole === "admin"
                  ? "Admin"
                  : "Operation"}{" "}
                Name
              </h3>
              <div className="bg-gray-200 px-8 py-2 rounded-xl text-sm mt-2">
                <p>Contact No: 0123456789</p>
                <p>Department: ABC</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 p-4 rounded-md w-80">
            <div className="flex justify-between">
              <span className="font-semibold">Total Ticket Handle</span>
              <span>5</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Ticket Solved</span>
              <span>2</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Ticket Pending</span>
              <span>1</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Ticket in progress</span>
              <span>2</span>
            </div>
            <div className="flex items-center gap-2 mt-3">
              <span>Rating</span>
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, idx) => (
                  <FaStar key={idx} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {userRole === "operations" && (
          <div className="flex flex-col gap-4">
            {["Operation Name 1", "Operation Name 2", "Operation Name 3"].map(
              (name, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 w-[260px]"
                >
                  <div className="bg-gray-300 w-20 h-20 rounded-md flex items-center justify-center">
                    <span className="text-3xl">👤</span>
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <p>{name}</p>
                    <button className="mt-2 bg-teal-400 text-white text-sm px-3 py-1 rounded hover:bg-teal-500">
                      View details
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        )}

        {userRole === "tech" && (
          <div className="flex flex-col gap-4">
            {[
              "Technical Support 1",
              "Technical Support 2",
              "Technical Support 3",
            ].map((name, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 w-[270px]">
                <div className="bg-gray-300 w-20 h-20 rounded-md flex items-center justify-center">
                  <span className="text-3xl">👤</span>
                </div>
                <div className="flex flex-col items-start justify-center">
                  <p>{name}</p>
                  <button className="mt-2 bg-teal-400 text-white text-sm px-3 py-1 rounded hover:bg-teal-500">
                    View details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
