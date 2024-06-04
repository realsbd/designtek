'use client'
import {createContext, useState} from 'react';
import {getUser} from "@/lib/auth";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Function to update user data
  const updateUser = (newUserData) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...newUserData,
    }));
    localStorage.setItem('user', JSON.stringify(newUserData));
  };

  const login = async (username, password) => {
    try {
      const response = await getUser(username, password);
      console.log('getUser response:', response);

      if (response && response.success === true) {
        updateUser({
          accessToken: response.accessToken,
          userDetails: response.userDetails,
          success: true,
          msg: 'Login successful',
        });
        localStorage.setItem('user', JSON.stringify(response.data));
        return response.data;
      } else {
        return { success: false, msg: 'Invalid credentials' };
      }
    } catch (error) {
      console.error('Error logging in:', error);
      return { error };
    }
  };

  // logout function
    const logout = () => {
    //   delete user form local storage
      localStorage.removeItem('user');
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