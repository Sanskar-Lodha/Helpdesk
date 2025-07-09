import { useState } from "react";
import {
  FaDownload,
  FaRegStar,
  FaSearch,
  FaStar,
  FaStarHalfAlt,
  FaUserCog,
} from "react-icons/fa";

import edit from "../assets/edit.png";
import logout from "../assets/logout.png";
import undo from "../assets/undo.png";

const ticketsData = [
  {
    id: 1234,
    subject: "Login issue",
    category: "Access issue",
    priority: "High",
    status: "In Progress",
    support: "Tech support",
    date: "13/08/21",
    rating: 0,
  },
  {
    id: 1124,
    subject: "New ticket issue",
    category: "Access issue",
    priority: "Medium",
    status: "On hold",
    support: "Operation Team",
    date: "14/08/21",
    rating: 0,
  },
  {
    id: 1224,
    subject: "New request",
    category: "Feedback",
    priority: "Low",
    status: "Closed",
    support: "Tech support",
    date: "13/08/21",
    rating: 4.5,
  },
  {
    id: 1244,
    subject: "Ticket submission",
    category: "Ticketing",
    priority: "High",
    status: "In Progress",
    support: "Operation Team",
    date: "14/08/21",
    rating: 0,
  },
  {
    id: 1114,
    subject: "Login issue",
    category: "Access issue",
    priority: "High",
    status: "In Progress",
    support: "Tech support",
    date: "3/08/21",
    rating: 0,
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "In Progress":
      return "bg-green-500";
    case "On hold":
      return "bg-blue-700";
    case "Closed":
      return "bg-black";
    default:
      return "bg-gray-400";
  }
};

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex text-yellow-400">
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

export default function MyTicket() {
  const [search, setSearch] = useState("");
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [selectedEdit, setSelectedEdit] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const user = "operations"; // OR "tech" or "user"

  const filteredTickets = ticketsData.filter((ticket) =>
    ticket.subject.toLowerCase().includes(search.toLowerCase())
  );

  const isAdmin = user === "operations" || user === "tech";

  return (
    <div className="p-6 font-sanchez">
      <p className="text-2xl mb-4">My Ticket</p>
      {/* Search */}
      <div className="flex items-center mb-4 w-full max-w-xs relative">
        <input
          type="text"
          placeholder="Find ticket"
          className="w-full border px-4 py-2 rounded shadow bg-[#dad9d9a1]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FaSearch className="absolute right-3 text-gray-600" />
      </div>
      {/* Show Entries */}
      <div className="flex items-center mb-2 text-sm">
        <span className="mr-2">Show:</span>
        <select className="border rounded px-2 py-1">
          <option>10</option>
          <option>25</option>
          <option>50</option>
        </select>
        <span className="ml-2">Entries</span>
      </div>
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-3 py-2">Ticket No.</th>
              <th className="px-3 py-2">Subject</th>
              {isAdmin && <th className="px-3 py-2">Category</th>}
              {isAdmin && <th className="px-3 py-2">Priority</th>}
              <th className="px-3 py-2">Date</th>
              <th className="px-3 py-2">Status</th>
              {isAdmin ? (
                <>
                  <th className="px-3 py-2">Person in charge</th>
                  <th className="px-3 py-2">Action</th>
                </>
              ) : (
                <th className="px-3 py-2">Rate</th>
              )}
            </tr>
          </thead>

          <tbody>
            {filteredTickets.map((ticket) => (
              <tr key={ticket.id} className="even:bg-gray-100">
                <td
                  onClick={() => setSelectedTicket(ticket)}
                  className="px-3 py-2 text-blue-600 underline cursor-pointer text-center"
                >
                  {ticket.id}
                </td>
                <td className="px-3 py-2 text-center">{ticket.subject}</td>
                {isAdmin && (
                  <td className="px-3 py-2 text-center">{ticket.category}</td>
                )}
                {isAdmin && (
                  <td className="px-3 py-2 text-center">{ticket.priority}</td>
                )}
                <td className="px-3 py-2 text-center">{ticket.date}</td>
                <td className="px-3 py-2 text-center">
                  <span
                    className={`text-white px-2 py-1 rounded text-xs ${getStatusColor(
                      ticket.status
                    )}`}
                  >
                    {ticket.status}
                  </span>
                </td>

                {isAdmin ? (
                  <>
                    <td className="px-3 py-2 text-center"></td>
                    <td className="px-3 py-2 text-center">
                      <div className="flex gap-2 justify-center text-lg">
                        <img
                          src={edit}
                          alt="edit"
                          className="w-[20px] cursor-pointer"
                          onClick={() => setSelectedEdit(ticket)}
                        ></img>

                        <FaUserCog
                          className="text-black cursor-pointer"
                          onClick={() => setSelectedTeam(ticket)}
                        />
                        <FaDownload className="text-gray-700 cursor-pointer" />
                      </div>
                    </td>
                  </>
                ) : (
                  <td className="px-3 py-2 text-center ">
                    <StarRating rating={ticket.rating} />
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Footer */}
      <div className="flex justify-between items-center mt-4 text-sm">
        <span>
          Showing 1 to {filteredTickets.length} of {ticketsData.length} entries
        </span>
        <span className="flex gap-1 items-center">
          <span className="cursor-pointer">&laquo;</span>
          <span className="px-2">1</span>
          <span className="cursor-pointer">&raquo;</span>
        </span>
      </div>
      {/* Ticket Detail Popup */}
      {selectedTicket && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 w-[90%] max-w-md rounded shadow-lg">
            <h3 className="text-center text-lg font-bold mb-4">
              Ticket Details
            </h3>
            <div className="text-sm leading-6">
              <p>Ticket No: {selectedTicket.id}</p>
              <p>Date: {selectedTicket.date}</p>
              {isAdmin && (
                <>
                  <p>Name: {selectedTicket.name}</p>
                  <p>Dept: {selectedTicket.dept}</p>
                  <br />

                  <p>Title: {selectedTicket.title}</p>
                  <p>Description: {selectedTicket.description}</p>
                </>
              )}
              {!isAdmin && <p>Subject: {selectedTicket.subject}</p>}
              <p>Category: {selectedTicket.category}</p>
              {isAdmin && <p>Type: {selectedTicket.type}</p>}
              <p>Priority: {selectedTicket.priority}</p>
              <p>Status: {selectedTicket.status}</p>
              {!isAdmin && <p>Support: {selectedTicket.support}</p>}
              {isAdmin && <p>Attachment :{selectedTicket.attachment}</p>}
              {/* Add more fields if needed */}
            </div>
            <div className="flex justify-center gap-16 mt-6">
              <button
                onClick={() => setSelectedTicket(null)}
                className="bg-blue-400 text-white px-6 py-1 rounded hover:bg-blue-600"
              >
                Update
              </button>
              <button
                onClick={() => setSelectedTicket(null)}
                className="bg-green-500 text-white px-6 py-1 rounded hover:bg-green-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {selectedEdit && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 w-[800px] h-[500px] rounded shadow-lg ">
            <div className="flex justify-center ">
              <p className="text-2xl ">My Ticket - Close Ticket</p>
            </div>
            <div className="flex justify-center items-center">
              <div className="bg-[#55D6C2] rounded-xl w-[650px] h-[350px] mt-7">
                <div className="flex justify-center items-center gap-5 mt-16">
                  <div className="flex flex-col gap-2">
                    <input
                      type="text"
                      placeholder="Ticket No."
                      italic
                      className="w-[250px] px-3 py-3 shadow-md rounded-md"
                    ></input>
                    <input
                      type="text"
                      placeholder="Team Name"
                      italic
                      className="w-[250px] px-3 py-3 shadow-md rounded-md"
                    ></input>
                    <input
                      type="text"
                      placeholder="Team Member"
                      italic
                      className="w-[250px] px-3 py-3 shadow-md rounded-md"
                    ></input>
                  </div>
                  <textarea
                    placeholder="Remark "
                    className="w-[300px] h-[160px] rounded-lg shadow-md p-2"
                  ></textarea>
                </div>

                <div className="flex justify-center items-center mt-9 gap-4 ">
                  <button>
                    <img src={undo} alt="undo" className="w-[35px]"></img>{" "}
                  </button>
                  <button
                    className="bg-gray-400 px-3 py-1 font-semibold rounded-md"
                    onClick={() => setSelectedEdit(null)}
                  >
                    Close Ticket
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {selectedTeam && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 w-[800px] h-[500px] rounded shadow-lg ">
            <div className="flex justify-center ">
              <p className="text-2xl ">My Ticket - Team Creation</p>
            </div>
            <div className="flex justify-center items-center">
              <div className="bg-[#55D6C2] rounded-xl w-[650px] h-[350px] mt-7">
                <div className="flex justify-center items-center gap-5 mt-16">
                  <div className="flex flex-col gap-2">
                    <input
                      type="text"
                      placeholder="Ticket No."
                      italic
                      className="w-[250px] px-3 py-3 shadow-md rounded-md"
                    ></input>
                    <input
                      type="text"
                      placeholder="Team Name"
                      italic
                      className="w-[250px] px-3 py-3 shadow-md rounded-md"
                    ></input>
                    <input
                      type="text"
                      placeholder="Team Member"
                      italic
                      className="w-[250px] px-3 py-3 shadow-md rounded-md"
                    ></input>
                  </div>
                  <textarea
                    placeholder="Remark "
                    className="w-[300px] h-[160px] rounded-lg shadow-md p-2"
                  ></textarea>
                </div>
                {user === "tech" && (
                  <div className="flex justify-center items-center">
                    <img src={logout} alt="logout" className="w-[30px]"></img>
                  </div>
                )}
                <div className="flex justify-center items-center mt-9 gap-4 ">
                  <button>
                    <img src={undo} alt="undo" className="w-[35px]"></img>{" "}
                  </button>
                  <button
                    className="bg-gray-400 px-3 py-1 font-semibold rounded-md"
                    onClick={() => setSelectedTeam(null)}
                  >
                    Create Team
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      ;
    </div>
  );
}
