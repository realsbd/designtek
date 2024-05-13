import { useContext } from "react";
import {UserContext} from "@/app/context/UserContext";

export const useUser = () => {
    const context = useContext(UserContext);

    if (!context) {
        // Handle the case when the context is undefined
        return {
            user: {
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
            },
        };
    }
    // const {user, updateUser, login} = useContext(UserContext);
    const {user, updateUser, login} = context;
    return {user, updateUser, login};
}