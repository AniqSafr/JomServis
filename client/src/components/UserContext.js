import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const fetchCurrentUser = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await fetch("http://localhost:5000/currentUser", {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });
                const data = await response.json();
                if (data.status === "ok") {
                    setCurrentUser(data.data);
                }
            } catch (error) {
                console.error("Error fetching current user:", error);
            }
        };

        fetchCurrentUser();
    }, []);

    return (
        <UserContext.Provider value={{ currentUser }}>
            {children}
        </UserContext.Provider>
    );
};
