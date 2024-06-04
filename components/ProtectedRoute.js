// import { useRouter } from 'next/router';
import { useUser } from '@/app/hooks/useUser';
import { redirect } from 'next/navigation';

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn, user } = useUser();
//   const router = useRouter();

  if (!isLoggedIn) {
    // If the user is not logged in, redirect to the login page
    redirect('/login');
    return null;
  }

  // If the user is logged in, render the protected component
  return children;
};

export default ProtectedRoute;