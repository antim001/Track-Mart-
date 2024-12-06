import { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';

// Create User Context
const UserContext = createContext();

// Auth Context Provider
export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // Initial loading state

    useEffect(() => {
        const verifyUser = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    setUser(null);
                    return;
                }

                const response = await axios.get('http://localhost:3000/api/auth/verify', {
                    headers: { Authorization: `Bearer ${token}` },
                });

                if (response.data.success) {
                    setUser(response.data.user);
                } else {
                    setUser(null);
                }
            } catch (error) {
                console.error('Error verifying user:', error);
                setUser(null);
            } finally {
                setLoading(false); // Finish loading state
            }
        };

        verifyUser();
    }, []);

    const login = (user) => {
        setUser(user);
        localStorage.setItem('token', user.token); // Save token locally
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token'); // Remove token
    };

    return (
        <UserContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </UserContext.Provider>
    );
};

// Hook to use Auth Context
export const useAuth = () => {
    return useContext(UserContext);
};
