import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/user", {
                withCredentials: true,
            });
            setUser(response.data);
        } catch (error) {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    const login = async (email, password) => {
        const response = await axios.post(
            "http://localhost:5000/api/login",
            { email, password },
            { withCredentials: true }
        );
        setUser(response.data.user);
        return response.data;
    };

    const signup = async (username, email, password) => {
        const response = await axios.post(
            "http://localhost:5000/api/signup",
            { username, email, password },
            { withCredentials: true }
        );
        return response.data;
    };

    const logout = async () => {
        await axios.post(
            "http://localhost:5000/api/logout",
            {},
            { withCredentials: true }
        );
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
