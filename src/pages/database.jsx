import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";

export default function Database() {
  const [tab, setTab] = useState("User");
  const [search, setSearch] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const data = [
    { id: "ABC123", name: "Abu", department: "IT", speciality: "Software" },
    {
      id: "ABC124",
      name: "Ahmad",
      department: "Software",
      speciality: "Networking",
    },
    {
      id: "ABC125",
      name: "Ali",
      department: "Technical",
      speciality: "Hardware",
    },
  ];

  return (
    <div className=" font-sanchez text-md text-gray-800">
      <h1 className="text-2xl mb-3">Database</h1>

      <div className="flex space-x-1 mb-3">
        {["User", "Operation Team", "Technical Support"].map((label) => (
          <button
            key={label}
            onClick={() => setTab(label)}
            className={`px-4 py-1 border border-gray-300 bg-teal-400 w-full ${
              tab === label ? "bg-teal-400 text-white" : "bg-gray-100"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mb-2 flex items-center space-x-2">
        <input
          type="text"
          placeholder="Find ticket"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1 w-48"
        />
      </div>

      <div className="flex items-center mb-2">
        <label htmlFor="entries" className="mr-2">
          Show:
        </label>
        <select
          id="entries"
          className="border border-gray-400 rounded px-1 py-0.5 bg-gray-200"
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
        <table className="min-w-full border border-gray-300 text-left">
          <thead className="border-b border-gray-300 bg-white">
            <tr>
              <th className="px-3 py-2">
                <input type="checkbox" />
              </th>
              <th className="px-3 py-2">Staff ID</th>
              <th className="px-3 py-2">Name</th>
              <th className="px-3 py-2">Department</th>
              <th className="px-3 py-2">Speciality</th>
              <th className="px-3 py-2">Setting</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={row.id}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                <td className="px-3 py-2">
                  <input type="checkbox" />
                </td>
                <td className="px-3 py-2">{row.id}</td>
                <td className="px-3 py-2">{row.name}</td>
                <td className="px-3 py-2">{row.department}</td>
                <td className="px-3 py-2">{row.speciality}</td>
                <td className="px-3 py-2 flex space-x-2 items-center">
                  <Pencil size={16} className="cursor-pointer" />
                  <Trash2 size={16} className="cursor-pointer" />
                </td>
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
