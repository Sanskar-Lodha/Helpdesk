import { useState } from "react";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaCheck,
  FaSearch,
} from "react-icons/fa";

import cross from "../assets/cross.png";

const mockTickets = [
  {
    id: 1234,
    subject: "Login issue",
    category: "Access issue",
    priority: "High",
    date: "13/08/21",
  },
  {
    id: 1124,
    subject: "New ticket issue",
    category: "Access issue",
    priority: "Medium",
    date: "14/08/21",
  },
  {
    id: 1224,
    subject: "New request",
    category: "Feedback",
    priority: "Low",
    date: "13/08/21",
  },
  {
    id: 1244,
    subject: "Ticket submission",
    category: "Ticketing",
    priority: "High",
    date: "14/08/21",
  },
  {
    id: 1114,
    subject: "Login issue",
    category: "Access issue",
    priority: "High",
    date: "3/08/21",
  },
];

export default function TicketApproval() {
  const [search, setSearch] = useState("");

  const filteredTickets = mockTickets.filter((ticket) =>
    ticket.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className=" font-sanchez">
      <h2 className="text-xl mb-4">Ticket Approval</h2>

      <div className="flex items-center mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Find ticket"
            className="border pr-10 pl-4 py-2 shadow-sm w-[200px] rounded-lg bg-[#dad9d9a1]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      <div className="flex items-center mb-4 gap-2">
        <label htmlFor="entries">Show:</label>
        <select id="entries" className="border p-1 rounded bg-[#dad9d9a1]">
          <option>10</option>
          <option>25</option>
          <option>50</option>
        </select>
        <span>Entries</span>
      </div>

      <table className="min-w-full bg-white  ">
        <thead>
          <tr className=" text-left">
            <th className="px-4 py-2 ">Ticket No.</th>
            <th className="px-4 py-2 ">Subject</th>
            <th className="px-4 py-2 ">Category</th>
            <th className="px-4 py-2 ">Priority</th>
            <th className="px-4 py-2 ">Date</th>
            <th className="px-4 py-2 ">Action</th>
            <th className="px-4 py-2 x">Assign to</th>
          </tr>
        </thead>
        <tbody>
          {filteredTickets.map((ticket) => (
            <tr key={ticket.id} className="even:bg-gray-300 odd:bg-gray-200">
              <td className="px-4 py-2 underline cursor-pointer">
                {ticket.id}
              </td>
              <td className="px-4 py-2 ">{ticket.subject}</td>
              <td className="px-4 py-2 ">{ticket.category}</td>
              <td className="px-4 py-2 ">{ticket.priority}</td>
              <td className="px-4 py-2 ">{ticket.date}</td>
              <td className="px-4 py-2  flex items-center gap-2">
                <FaCheck className="text-black cursor-pointer" />

                <img
                  src={cross}
                  alt="cross"
                  className="h-[20px] cursor-pointer"
                ></img>
              </td>
              <td className="px-4 py-2 border">
                <select className="border rounded px-2 py-1 bg-gray-400 ">
                  <option>Assign</option>
                  <option>Opeartions</option>
                  <option>Admin</option>
                  <option>Technical</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 text-sm">
        Showing 1 to {filteredTickets.length} of {filteredTickets.length}{" "}
        entries
      </div>

      <div className="mt-2 flex justify-end items-center">
        <FaAngleDoubleLeft className="text-gray-600 cursor-pointer" />1
        <FaAngleDoubleRight className="text-gray-600 cursor-pointer" />
      </div>
    </div>
  );
}
