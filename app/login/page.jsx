"use client";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    // Add your login logic here
    setTimeout(() => {
      setLoading(false);
      setError("Login functionality not implemented yet.");
    }, 1200);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 backdrop-blur-xl px-4">
      <form onSubmit={handleSubmit} className="bg-gray-950/80 rounded-2xl shadow-2xl p-8 w-full max-w-md border border-gray-800 flex flex-col gap-6">
        <h2 className="text-3xl font-bold text-white mb-2 text-center">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-indigo-500 focus:ring-indigo-500 placeholder-gray-400"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-indigo-500 focus:ring-indigo-500 placeholder-gray-400"
        />
        <button
          type="submit"
          className="w-full py-3 px-6 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
        {error && <div className="text-red-400 text-center mt-2">{error}</div>}
      </form>
    </main>
  );
}
