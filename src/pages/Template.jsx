import { FaBell } from "react-icons/fa";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom"; // <-- added useNavigate
import avatar from "../assets/avatar.png";
import dashboard from "../assets/dashboard.png";
import database from "../assets/database.png";
import logout from "../assets/logout.png";
import newTicket from "../assets/newTicket.png";
import perf from "../assets/performance.png";
import ticketapproval from "../assets/ticket-approval.png";
import ticket from "../assets/ticket.png";

const user = "operations";

export default function Template() {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col ">
      <nav className="bg-[#55D6C2] h-[60px] w-full flex justify-between items-center px-6">
        <p className="italic text-3xl text-white font-bold font-roboto">
          Helpdesk
        </p>
        <div className="flex items-center gap-3 cursor-pointer">
          <FaBell className="w-[23px] h-[23px]" />
          <Link to="/userprofile">
            <img src={avatar} alt="avatar" className="w-[23px] h-[23px]" />
          </Link>
          <img
            src={logout}
            alt="logout"
            className="w-[30px] h-[30px] cursor-pointer"
            onClick={handleLogout}
          />
        </div>
      </nav>

      <div className="flex flex-1">
        <aside className="w-[230px] bg-gray-300 text-black pt-6">
          <ul className="flex flex-col gap-6 pl-6 ml-9">
            {["operations", "user", "admin", "tech"].includes(user) && (
              <li>
                <Link
                  to="/dashboard"
                  className="flex items-center gap-2 font-sanchez"
                >
                  {isActive("/dashboard") && <span>{">"}</span>}
                  <img
                    src={dashboard}
                    alt="dashboard"
                    className="w-[23px] h-[25px]"
                  />
                  Dashboard
                </Link>
              </li>
            )}
            {user === "user" ? (
              <li>
                <Link to="/new-ticket" className="flex items-center gap-2">
                  {isActive("/new-ticket") && <span>{">"}</span>}
                  <img
                    src={newTicket}
                    className="w-[16px] h-[23px]"
                    alt="new ticket"
                  />
                  New Ticket
                </Link>
              </li>
            ) : user === "operations" ? (
              <li>
                <Link
                  to="/ticket-approval"
                  className="flex items-center gap-2 font-sanchez"
                >
                  {isActive("/ticket-approval") && <span>{">"}</span>}
                  <img
                    src={ticketapproval}
                    className="w-[23px] h-[16px]"
                    alt="new ticket"
                  />
                  Ticket Approval
                </Link>
              </li>
            ) : user === "admin" ? (
              <li>
                <Link
                  to="/database"
                  className="flex items-center gap-2 font-sanchez"
                >
                  {isActive("/database") && <span>{">"}</span>}
                  <img
                    src={database}
                    className="w-[23px] h-[16px]"
                    alt="new ticket"
                  />
                  Database
                </Link>
              </li>
            ) : (
              ""
            )}
            <li>
              <Link to="/my-tickets" className="flex items-center gap-2">
                {isActive("/my-tickets") && <span>{">"}</span>}
                <img
                  src={ticket}
                  className="w-[18px] h-[23px]"
                  alt="my tickets"
                />
                My Tickets
              </Link>
            </li>
            <li>
              <Link
                to="/performance"
                className="flex items-center gap-2 font-sanchez"
              >
                {isActive("/performance") && <span>{">"}</span>}
                <img
                  src={perf}
                  className="w-[23px] h-[18px]"
                  alt="my tickets"
                />
                Performance
              </Link>
            </li>
          </ul>
        </aside>

        <div className="flex flex-col flex-1 bg-white min-h-[calc(100vh-60px)]">
          <main className="flex-1 p-6 overflow-hidden">
            <Outlet />
          </main>
          <footer className="bg-[#55D6C2] py-3 px-6 text-sm flex justify-center items-center">
            <p>Footer Area</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
