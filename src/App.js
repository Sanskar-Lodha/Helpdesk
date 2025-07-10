import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Database from "./pages/database";
import EditAccountForm from "./pages/EditAccountForm";
import Forgotpassword from "./pages/Forgotpassword";
import MyTickets from "./pages/MyTickets";
import NewTicket from "./pages/NewTicket";
import Performance from "./pages/Performance";
import Settings from "./pages/Setting";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Template from "./pages/Template";
import TicketApproval from "./pages/ticket-approval";
import UserLogHistory from "./pages/UserLogHistory";
import UserProfile from "./pages/Userprofile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpass" element={<Forgotpassword />} />
        <Route path="/template" element={<Template />} />

        <Route element={<Template />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/new-ticket" element={<NewTicket />} />
          <Route path="/my-tickets" element={<MyTickets />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/edituser" element={<EditAccountForm />} />
          <Route path="/ticket-approval" element={<TicketApproval />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/setting" element={<Settings />} />
          <Route path="/userloghistory" element={<UserLogHistory />} />
          <Route path="/database" element={<Database />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
