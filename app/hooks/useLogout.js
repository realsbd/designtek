import { useRouter } from 'next/navigation';

export function useLogout() {
    const router = useRouter();

    const logout = () => {
        // Remove the session data from local storage or state
        localStorage.removeItem('session');

        // Optionally, clear any other user-related data or state

        // Redirect to the login page or any other desired route
        router.push('/login');
    };

    return { logout };
}