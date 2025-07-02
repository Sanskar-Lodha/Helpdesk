import { useState } from "react";

export default function EditAccountForm() {
  const [form, setForm] = useState({
    username: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    email: "",
    realName: "",
    accessLevel: "",
    projectAccessLevel: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("User updated successfully!");
  };

  return (
    <div className="p-8 font-sanchez">
      <h2 className="text-2xl mb-4">User Profile</h2>

      <div className="border-t-4 border-[#55D6C2] w-fit">
        <button className="bg-[#55D6C2] text-black  px-4 py-2">
          Edit Account
        </button>
      </div>

      <form onSubmit={handleSubmit} className="mt-4 w-full max-w-4xl">
        <div className="grid grid-cols-2">
          <div className="flex flex-col">
            {[
              "Username",
              "Current Password",
              "New Password",
              "Confirm Password",
              "Email",
              "Real Name",
              "Access Level",
              "Project Access Level",
            ].map((label, index) => (
              <label
                key={index}
                className="bg-gray-500 text-white py-2 px-4 border-b border-white"
              >
                {label}
              </label>
            ))}

            <div className="p-2 bg-gray-300">
              <button
                type="submit"
                className="bg-[#55D6C2] text-black  px-4 py-2 rounded"
              >
                Update User
              </button>
            </div>
          </div>

          <div className="flex flex-col">
            {Object.keys(form).map((field, index) => (
              <input
                key={index}
                type={
                  field.toLowerCase().includes("password") ? "password" : "text"
                }
                name={field}
                value={form[field]}
                onChange={handleChange}
                className="border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#55D6C2] border-b"
              />
            ))}
            <div className="p-2 bg-gray-300" />
          </div>
        </div>
      </form>
    </div>
  );
}
