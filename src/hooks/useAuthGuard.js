// hooks/useAuthGuard.js
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";

export function useAuthGuard({ allowGuests = true, blockRoles = [], redirectIfRoleBlocked = "/" }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (loading) return; // wait until auth state is resolved

    if (!allowGuests && !user) {
      router.push("/");
      return;
    }

    if (user && blockRoles.includes(user.role)) {
      router.push(redirectIfRoleBlocked);
    }
  }, [user, loading, allowGuests, blockRoles, redirectIfRoleBlocked, router]);

  return { user, loading };
}
