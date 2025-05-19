import { useSession } from "next-auth/react";

export function useAuth() {
  const { data: session, status } = useSession();
  return { session, isLoggedIn: !!session, isLoading: status === 'loading' };
}