import { useState } from "react";

export default function UserLogHistory() {
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const data = [
    {
      dateIn: "130821 / 0800",
      staffId: "XL000001",
      department: "OT",
      activity: "Create Team",
      dateOut: "130821 / 0815",
    },
    {
      dateIn: "130821 / 0805",
      staffId: "",
      department: "",
      activity: "",
      dateOut: "130821 / 0810",
    },
    {},
    {},
    {},
  ];

  return (
    <div className="p-6 font-sanchez text-sm text-gray-800">
      <h1 className="text-lg mb-4">User Log History</h1>

      <div className="flex items-center mb-2">
        <label htmlFor="entries" className="mr-2 ">
          Show:
        </label>
        <select
          id="entries"
          className="border border-gray-400 rounded px-1 py-0.5 bg-gray-300"
          value={entriesPerPage}
          onChange={(e) => setEntriesPerPage(Number(e.target.value))}
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
        <span className="ml-2">Entries</span>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full  text-left">
          <thead className="">
            <tr>
              <th className="px-3 py-2">No.</th>
              <th className="px-3 py-2">Date/Sign InTime</th>
              <th className="px-3 py-2">Staff ID</th>
              <th className="px-3 py-2">Department</th>
              <th className="px-3 py-2">Activity</th>
              <th className="px-3 py-2">Date/Sign Out time</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-200" : "bg-gray-100"}
              >
                <td className="px-3 py-2">{index + 1}.</td>
                <td className="px-3 py-2">{row.dateIn || ""}</td>
                <td className="px-3 py-2">{row.staffId || ""}</td>
                <td className="px-3 py-2">{row.department || ""}</td>
                <td className="px-3 py-2">{row.activity || ""}</td>
                <td className="px-3 py-2">{row.dateOut || ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-2 text-sm">
        <span>
          Showing 1 to {data.length} of {data.length} entries
        </span>
        <div className="space-x-1">
          <span className="cursor-pointer">&laquo;</span>
          <span className="border px-2 py-0.5">1</span>
          <span className="cursor-pointer">&raquo;</span>
        </div>
      </div>
    </div>
  );
}
