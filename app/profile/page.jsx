"use client";
import { useEffect, useState } from "react";
import useAuth from "../../firebase/useAuth";
import Image from "next/image";

export default function ProfilePage() {
    const { user, loading } = useAuth();
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        if (user) {
            setProfile(user);
        }
    }, [user]);

    if (loading) {
        return (
            <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900">
                <div className="text-white text-xl">Loading...</div>
            </main>
        );
    }

    if (!profile) {
        return (
            <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900">
                <div className="text-gray-300 text-xl">You are not logged in.</div>
            </main>
        );
    }

    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 py-16 px-4">
            <div className="bg-gray-950/80 rounded-2xl shadow-xl border border-gray-800 p-10 flex flex-col items-center max-w-md w-full">
                <div className="mb-6">
                    <Image
                        src={profile.displayImage || "/default-avatar.png"}
                        alt="Profile"
                        width={100}
                        height={100}
                        className="rounded-full border-4 border-indigo-400 object-cover"
                    />
                </div>
                <h2 className="text-3xl font-bold text-indigo-300 mb-2">{profile.displayName || "No Name"}</h2>
                <div className="text-gray-300 mb-2">
                    <span className="font-semibold">Email:</span> {profile.email}
                </div>
                {profile.uid && (
                    <div className="text-gray-400 mb-2 text-xs">
                        <span className="font-semibold">User ID:</span> {profile.uid}
                    </div>
                )}
                <div className="mt-6">
                    <span className="text-gray-400 text-sm">Joined: {profile.createdAt ? new Date(profile.createdAt).toLocaleDateString() : "N/A"}</span>
                </div>
            </div>
        </main>
    );
}