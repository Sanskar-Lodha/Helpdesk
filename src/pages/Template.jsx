import { useEffect, useState } from "react";
import { FaBell } from "react-icons/fa";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

import userside from "../assets/add-friend.png";
import avatar from "../assets/avatar.png";
import dashboard from "../assets/dashboard.png";
import database from "../assets/database.png";
import log from "../assets/log.png";
import logout from "../assets/logout.png";
import newTicket from "../assets/newTicket.png";
import perf from "../assets/performance.png";
import setting from "../assets/setting.png";
import techsupport from "../assets/technical-support.png";
import ticketapproval from "../assets/ticket-approval.png";
import ticket from "../assets/ticket.png";
import { useUser } from "../UserContext";

export default function Template() {
  const location = useLocation();
  const navigate = useNavigate();
  const { userRole } = useUser();

  const isActive = (path) => location.pathname === path;

  const [showDatabaseMenu, setShowDatabaseMenu] = useState(false);

  useEffect(() => {
    if (location.pathname.startsWith("/database")) {
      setShowDatabaseMenu(true);
    }
  }, [location.pathname]);

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col font-sanchez">
      {/* Navbar */}
      <nav className="bg-[#55D6C2] h-[60px] w-full flex justify-between items-center px-6">
        <p className="italic text-3xl text-white">Helpdesk</p>
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

      {/* Sidebar + Content */}
      <div className="flex flex-1">
        <aside className="w-[230px] bg-gray-300 text-black pt-6">
          <ul className="flex flex-col gap-6 pl-6 ml-9">
            {["operations", "user", "admin", "tech"].includes(userRole) && (
              <li>
                <Link to="/dashboard" className="flex items-center gap-2">
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

            {userRole === "user" && (
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
            )}

            {userRole === "operations" && (
              <li>
                <Link to="/ticket-approval" className="flex items-center gap-2">
                  {isActive("/ticket-approval") && <span>{">"}</span>}
                  <img
                    src={ticketapproval}
                    className="w-[23px] h-[16px]"
                    alt="ticket approval"
                  />
                  Ticket Approval
                </Link>
              </li>
            )}

            {userRole === "admin" && (
              <>
                <li>
                  <Link to="/database" className="flex items-center gap-2">
                    {" "}
                    {isActive("/database") && <span>{">"}</span>}
                    <div
                      onClick={() => setShowDatabaseMenu(!showDatabaseMenu)}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <img
                        src={database}
                        className="w-[23px] h-[16px]"
                        alt="database"
                      />
                      <span>Database</span>
                    </div>
                  </Link>
                </li>

                {showDatabaseMenu && (
                  <>
                    <li className="ml-8 text-sm text-gray-700">
                      <Link to="/database" className="flex items-center gap-2">
                        <img
                          src={userside}
                          alt="user"
                          className="w-[23px] h-[16px]"
                        ></img>
                        User
                      </Link>
                    </li>
                    <li className="ml-8 text-sm text-gray-700">
                      <Link to="/database" className="flex items-center gap-2">
                        Operation Team
                      </Link>
                    </li>
                    <li className="ml-8 text-sm text-gray-700">
                      <Link to="/database" className="flex items-center gap-2">
                        <img
                          src={techsupport}
                          alt="techsupport"
                          className="w-[23px] h-[16px]"
                        ></img>
                        Technical Support
                      </Link>
                    </li>
                  </>
                )}

                <li>
                  <Link to="/setting" className="flex items-center gap-2">
                    {isActive("/setting") && <span>{">"}</span>}
                    <img
                      src={setting}
                      className="w-[23px] h-[16px]"
                      alt="setting"
                    />
                    Setting
                  </Link>
                </li>

                <li>
                  <Link
                    to="/userloghistory"
                    className="flex items-center gap-2"
                  >
                    {isActive("/userloghistory") && <span>{">"}</span>}
                    <img src={log} className="w-[23px] h-[16px]" alt="log" />
                    <span>User Log History</span>
                  </Link>
                </li>
              </>
            )}

            {["user", "tech", "operations"].includes(userRole) && (
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
            )}

            {["tech", "operations"].includes(userRole) && (
              <li>
                <Link to="/performance" className="flex items-center gap-2">
                  {isActive("/performance") && <span>{">"}</span>}
                  <img
                    src={perf}
                    className="w-[23px] h-[18px]"
                    alt="performance"
                  />
                  Performance
                </Link>
              </li>
            )}
          </ul>
        </aside>

        {/* Main Content */}
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
