"use client";
import api from "@/lib/api";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
function page() {
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (loggedIn) {
      router.push("/");
    }
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Handle registration logic here
    try {
      const res = await api.post("/login", form);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("isLoggedIn", "true");
      router.push("/");
      setMessage("Registration successful ✅");
      setIsLoading(false);
    } catch (e) {
      setMessage(e + "Error registering ❌");
      setIsLoading(false);
    }
  };
  return (
    <div className="mx-auto max-w-md mt-10 p-6 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
      <h4 className="mb-6 text-center">You can login here for tour guide</h4>
      {message && <p className="text-center text-red-600 mb-4">{message}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
          disabled={isLoading}
          className={cn(
            "bg-blue-600 text-white py-2 rounded hover:bg-blue-700",
            isLoading && "bg-slate-300"
          )}
        >
          {isLoading ? "Login in..." : "Login"}
        </button>
      </form>
      <div className="mt-4 text-center text-sm text-gray-600">
        If you don't have account{" "}
        <Link href="/register" className="text-blue-600 hover:underline">
          Register
        </Link>
      </div>
    </div>
  );
}

export default page;
