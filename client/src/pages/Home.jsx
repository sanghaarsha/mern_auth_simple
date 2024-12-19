// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Home() {
    const { user } = useAuth();

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-purple-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="text-center">
                    <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-8 animate-fade-in">
                        Welcome to AuthApp
                    </h1>
                    <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                        A secure and modern authentication system built with
                        React and Node.js. Experience seamless user management
                        with our cutting-edge solution.
                    </p>

                    {!user ? (
                        <div className="space-y-4 sm:space-y-0 sm:space-x-4">
                            <Link
                                to="/login"
                                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transform transition duration-150 hover:scale-105 shadow-lg"
                            >
                                Get Started
                            </Link>
                            <Link
                                to="/signup"
                                className="inline-flex items-center px-8 py-3 border border-purple-600 text-base font-medium rounded-md text-purple-600 bg-white hover:bg-purple-50 transform transition duration-150 hover:scale-105 shadow-lg"
                            >
                                Create Account
                            </Link>
                        </div>
                    ) : (
                        <Link
                            to="/dashboard"
                            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transform transition duration-150 hover:scale-105 shadow-lg"
                        >
                            Go to Dashboard
                        </Link>
                    )}
                </div>

                {/* Features Section */}
                <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <div className="text-purple-600 text-4xl mb-4">🔒</div>
                        <h3 className="text-xl font-semibold mb-2">
                            Secure Authentication
                        </h3>
                        <p className="text-gray-600">
                            State-of-the-art security measures to protect your
                            data
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <div className="text-purple-600 text-4xl mb-4">⚡</div>
                        <h3 className="text-xl font-semibold mb-2">
                            Lightning Fast
                        </h3>
                        <p className="text-gray-600">
                            Optimized performance for the best user experience
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <div className="text-purple-600 text-4xl mb-4">🎯</div>
                        <h3 className="text-xl font-semibold mb-2">
                            User Friendly
                        </h3>
                        <p className="text-gray-600">
                            Intuitive interface designed for seamless
                            interaction
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
