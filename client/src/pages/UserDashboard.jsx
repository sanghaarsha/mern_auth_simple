import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

function UserDashboard() {
    const { user } = useAuth();
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:5000/api/user",
                    {
                        withCredentials: true,
                    }
                );
                setUserData(response.data);
            } catch (err) {
                setError("Error fetching user data");
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-purple-100">
                <div className="text-xl text-purple-600 animate-pulse">
                    Loading...
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-purple-100">
                <div className="text-red-500 bg-red-50 p-4 rounded-lg shadow">
                    {error}
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                            Welcome back, {user?.username}!
                        </h1>
                        <p className="text-gray-600 mt-2">
                            Manage your account and view your profile
                            information below.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-purple-50 p-6 rounded-xl">
                            <h2 className="text-xl font-semibold text-purple-600 mb-4">
                                Profile Information
                            </h2>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-2">
                                    <span className="text-gray-600 font-medium">
                                        Username:
                                    </span>
                                    <span>{userData?.username}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-gray-600 font-medium">
                                        Email:
                                    </span>
                                    <span>{userData?.email}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-gray-600 font-medium">
                                        Member since:
                                    </span>
                                    <span>
                                        {new Date(
                                            userData?.createdAt
                                        ).toLocaleDateString()}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-indigo-50 p-6 rounded-xl">
                            <h2 className="text-xl font-semibold text-indigo-600 mb-4">
                                Account Status
                            </h2>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <span className="text-gray-600">
                                        Account Active
                                    </span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                    <span className="text-gray-600">
                                        Email Verified
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-2 bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl">
                            <h2 className="text-xl font-semibold text-purple-600 mb-4">
                                Quick Actions
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <button className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-left">
                                    <h3 className="font-medium text-gray-900">
                                        Edit Profile
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        Update your information
                                    </p>
                                </button>
                                <button className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-left">
                                    <h3 className="font-medium text-gray-900">
                                        Security
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        Manage your password
                                    </p>
                                </button>
                                <button className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-left">
                                    <h3 className="font-medium text-gray-900">
                                        Preferences
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        Customize your experience
                                    </p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserDashboard;
