import { useState } from "react";
import { FaRegStar, FaSearch, FaStar, FaStarHalfAlt } from "react-icons/fa";

const ticketsData = [
  {
    id: 1234,
    subject: "Login issue",
    status: "In Progress",
    support: "Tech support",
    date: "13/08/21",
    rating: 0,
  },
  {
    id: 1124,
    subject: "New ticket issue",
    status: "On hold",
    support: "Operation Team",
    date: "14/08/21",
    rating: 0,
  },
  {
    id: 1224,
    subject: "New request",
    status: "Closed",
    support: "Tech support",
    date: "13/08/21",
    rating: 4.5,
  },
  {
    id: 1244,
    subject: "Ticket submission",
    status: "In Progress",
    support: "Operation Team",
    date: "14/08/21",
    rating: 0,
  },
  {
    id: 1114,
    subject: "Login issue",
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
      return "bg-gray-600";
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

  const filteredTickets = ticketsData.filter((ticket) =>
    ticket.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 font-sanchez relative">
      <p className="text-center text-3xl mb-6">List of Ticket</p>

      {/* Search */}
      <div className="flex items-center mb-4 gap-2">
        <input
          type="text"
          placeholder="Find ticket"
          className="border border-gray-300 rounded px-3 py-1 shadow-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FaSearch className="text-gray-500" />
      </div>

      {/* Show Entries */}
      <div className="flex items-center mb-2">
        <label className="mr-2">Show:</label>
        <select className="border border-gray-300 rounded px-2 py-1">
          <option>10</option>
          <option>25</option>
          <option>50</option>
        </select>
        <span className="ml-2">Entries</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-3 py-2">Ticket No.</th>
              <th className="px-3 py-2">Subject</th>
              <th className="px-3 py-2">Status</th>
              <th className="px-3 py-2">Support by</th>
              <th className="px-3 py-2">Date</th>
              <th className="px-3 py-2">Rate</th>
            </tr>
          </thead>
          <tbody>
            {filteredTickets.map((ticket) => (
              <tr key={ticket.id} className="even:bg-gray-100">
                <td
                  onClick={() => setSelectedTicket(ticket)}
                  className="px-3 py-2 text-blue-600 underline cursor-pointer"
                >
                  {ticket.id}
                </td>
                <td className="px-3 py-2">{ticket.subject}</td>
                <td className="px-3 py-2">
                  <span
                    className={`text-white text-xs px-2 py-1 rounded ${getStatusColor(
                      ticket.status
                    )}`}
                  >
                    {ticket.status}
                  </span>
                </td>
                <td className="px-3 py-2">{ticket.support}</td>
                <td className="px-3 py-2">{ticket.date}</td>
                <td className="px-3 py-2">
                  <StarRating rating={ticket.rating} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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

      {selectedTicket && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 w-[90%] max-w-md rounded shadow-lg">
            <h3 className="text-center text-lg font-bold mb-4">
              Ticket Details
            </h3>
            <div className="text-sm leading-6">
              <p>Ticket No: {selectedTicket.id}</p>
              <p>Date: {selectedTicket.date}</p>
              <p>Name: {selectedTicket.name}</p>
              <p>Dept: {selectedTicket.dept}</p>
              <br />
              <p>Title: {selectedTicket.title}</p>
              <p>Description: {selectedTicket.description}</p>
              <p>Category: {selectedTicket.category}</p>
              <p>Type: {selectedTicket.type}</p>
              <p>Priority: {selectedTicket.priority}</p>
              <p>Status: {selectedTicket.status}</p>
              <p>Attachment: {selectedTicket.attachment}</p>
            </div>
            <div className="flex justify-center mt-6">
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
    </div>
  );
}
