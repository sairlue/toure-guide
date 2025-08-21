"use client";
import { useState } from "react";
import api from "@/lib/api";
function page() {
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    try {
      const res = await api.post("/register", form);
      localStorage.setItem("token", res.data.token);
      setMessage("Registration successful ✅");
    } catch {
      setMessage("Error registering ❌");
    }
  };
  return (
    <div className="mx-auto max-w-md mt-10 p-6 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Register / Sign Up
      </h1>
      <h4 className="mb-6 text-center">You can register here for tour guide</h4>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="first_name"
          placeholder="Frist Name"
          value={form.first_name}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={form.last_name}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default page;
