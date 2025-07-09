import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import EditAccountForm from "./pages/EditAccountForm";
import Forgotpassword from "./pages/Forgotpassword";
import MyTickets from "./pages/MyTickets";
import NewTicket from "./pages/NewTicket";
import Performance from "./pages/Performance";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Template from "./pages/Template";
import UserProfile from "./pages/Userprofile";
import TicketApproval from "./pages/ticket-approval";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Signin />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/forgotpass" element={<Forgotpassword />} />

//         {/* Layout with nested routes */}
//         <Route element={<Template />}>
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/new-ticket" element={<NewTicket />} />
//           <Route path="/my-tickets" element={<MyTickets />} />
//           <Route path="/userprofile" element={<UserProfile />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

export default App;
