"use client";
import { logout } from "../firebase/authService";
import { useState } from "react";

export default function LogoutButton() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogout = async () => {
    setLoading(true);
    setError("");
    try {
      await logout();
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.message || "Logout failed");
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="ml-6 px-6 py-2 rounded-lg bg-red-600 text-white font-semibold text-lg shadow-md hover:bg-red-700 transition-all duration-200"
      disabled={loading}
    >
      {loading ? "Logging out..." : "Logout"}
    </button>
  );
}
