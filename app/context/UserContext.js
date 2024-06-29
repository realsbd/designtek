'use client'
import {createContext, useEffect, useState} from 'react';
import {getUser} from "@/lib/auth";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Function to update user data
  const updateUser = (userData) => {
    setUser(userData);
    if (userData) {
      localStorage.setItem('user', JSON.stringify(userData));
    } else {
      localStorage.removeItem('user');
    }
  };

  const login = async (username, password) => {
    try {
      const response = await getUser(username, password);
      console.log('getUser response:', response);

      if (response && response.success === true) {
        const userData = {
          accessToken: response.accessToken,
          userDetails: response.userDetails,
          success: true,
          msg: 'Login successful',
        };
        updateUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));

        // set a cookie for server-side
        document.cookie = `user=${JSON.stringify(userData)}; path=/; max-age=86400;`

        return userData;
      } else {
        return { success: false, msg: response.msg || 'Invalid credentials' };
      }
    } catch (error) {
      console.error('Error logging in:', error);
      return { success: false, msg: error.message || 'An error occurred during login' };
    }
  };

  // logout function
    const logout = () => {
    //   delete user form local storage
      localStorage.removeItem('user');
      document.cookie = 'user=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      updateUser({
        accessToken: '',
        userDetails: {
          _id: '',
          username: '',
          email: '',
          role: '',
          bookmarks: [],
          __v: 0,
        },
        success: false,
        msg: '',
      })
    }

  return (
      <UserContext.Provider value={{ user, setUser, login, logout}}>
        {children}
      </UserContext.Provider>
  );
};

export default UserProvider;
