"use client";
import { useState } from "react";
import { register, googleLogin } from "../../firebase/authService";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayImage, setDisplayImage] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    if (password !== confirmPassword) {
      setLoading(false);
      setError("Passwords do not match");
      return;
    }
    try {
      // Register with Firebase
      const userCredential = await register(email, password);
      // Send user data to backend
      await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          uid: userCredential.user.uid,
          email,
          password,
          displayName,
          displayImage,
        }),
      });
      setLoading(false);
      setSuccess(true);
    } catch (err) {
      setLoading(false);
      setError(err.message || "Signup failed");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 backdrop-blur-xl px-4">
      <form onSubmit={handleSubmit} className="bg-gray-950/80 rounded-2xl shadow-2xl p-8 w-full max-w-md border border-gray-800 flex flex-col gap-6">
        <h2 className="text-3xl font-bold text-white mb-2 text-center">Sign Up</h2>
        <input
          type="text"
          placeholder="User Name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          required
          className="px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-indigo-500 focus:ring-indigo-500 placeholder-gray-400"
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-indigo-500 focus:ring-indigo-500 placeholder-gray-400"
        />
        <input
          type="text"
          placeholder="Display Image URL"
          value={displayImage}
          onChange={(e) => setDisplayImage(e.target.value)}
          className="px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-indigo-500 focus:ring-indigo-500 placeholder-gray-400"
        />
        <button
          type="submit"
          className="w-full py-3 px-6 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
          disabled={loading}
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>
        {error && <div className="text-red-400 text-center mt-2">{error}</div>}
        {success && <div className="text-green-400 text-center mt-2">Account created! You can now log in.</div>}
        <button
          type="button"
          className="w-full py-3 px-6 rounded-lg bg-white text-gray-900 font-semibold hover:bg-gray-400 transition flex items-center justify-center gap-2"
          onClick={async () => {
            setLoading(true);
            setError("");
            try {
              await googleLogin();
              setLoading(false);
              setSuccess(true);
            } catch (err) {
              setLoading(false);
              setError(err.message || "Google signup failed");
            }
          }}
          disabled={loading}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24"><path fill="#4285F4" d="M24 9.5c3.54 0 6.73 1.23 9.24 3.25l6.93-6.93C36.45 2.34 30.59 0 24 0 14.73 0 6.41 5.64 2.44 14.02l8.06 6.27C12.36 13.36 17.73 9.5 24 9.5z"/><path fill="#34A853" d="M46.1 24.5c0-1.64-.15-3.22-.43-4.75H24v9.02h12.44c-.54 2.9-2.18 5.36-4.64 7.02l7.18 5.59C43.59 37.41 46.1 31.45 46.1 24.5z"/><path fill="#FBBC05" d="M10.5 28.29c-.62-1.86-.98-3.83-.98-5.79s.36-3.93.98-5.79l-8.06-6.27C.86 13.64 0 18.64 0 24s.86 10.36 2.44 14.02l8.06-6.27z"/><path fill="#EA4335" d="M24 48c6.59 0 12.45-2.17 16.93-5.91l-7.18-5.59c-2.01 1.35-4.59 2.15-7.75 2.15-6.27 0-11.64-3.86-13.5-9.29l-8.06 6.27C6.41 42.36 14.73 48 24 48z"/></svg>
          {loading ? "Signing up..." : "Sign Up with Google"}
        </button>
      </form>
    </main>
  );
}
