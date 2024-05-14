import { useContext } from "react";
import {UserContext} from "@/app/context/UserContext";

export const useUser = () => {
    const {user, updateUser, login} = useContext(UserContext);
    return {user, updateUser, login};
}