import { useRouter } from 'next/navigation';
import {logout} from "@/lib/auth";

export function useSignout() {
    const router = useRouter();

    const signout = () => {
        // Remove the session data from local storage or state
        logout().then(r => localStorage.removeItem('session'))


        // Optionally, clear any other user-related data or state

        // Redirect to the login page or any other desired route
        router.push('/login');
    };

    return { signout };
}