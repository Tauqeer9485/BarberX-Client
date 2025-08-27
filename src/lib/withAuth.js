// lib/withAuth.js
export function withAuth(handler, options = {}) {
  return async (context) => {
    const { req } = context;
    const token = req.cookies?.token || null;

    const {
      allowGuests = false,       // Guests allowed to view page?
      blockRoles = [],           // Roles to restrict access
      redirectIfBlocked = "/",   // Default redirect for blocked users
      redirectIfGuest = "/",     // Default redirect if guest not allowed
      redirectIfRoleBlocked = "/admin_panel", // Redirect if role is blocked
    } = options;

    // Guest logic
    if (!token) {
      if (allowGuests) {
        const guestProps = handler ? await handler(context) : { props: {} };
        return {
          ...guestProps,
          props: { ...guestProps.props, user: null },
        };
      }
      return { redirect: { destination: redirectIfGuest, permanent: false } };
    }

    try {
      // Build baseUrl safely (for SSR calls only)
      let baseUrl = "";
      if (typeof window === "undefined") {
        const protocol = req.headers["x-forwarded-proto"] || "http";
        const host = req.headers.host;
        baseUrl = `${protocol}://${host}`;
      }

      // Verify token with backend
      const res = await fetch(`${baseUrl}/api/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) {
        return { redirect: { destination: redirectIfBlocked, permanent: false } };
      }

      const { user } = await res.json();

      // Role restriction check
      if (blockRoles.includes(user.role)) {
        return {
          redirect: { destination: redirectIfRoleBlocked, permanent: false },
        };
      }

      // Call original handler and inject user
      const baseProps = handler ? await handler(context) : { props: {} };
      return {
        ...baseProps,
        props: { ...baseProps.props, user },
      };
    } catch (err) {
      console.error("SSR auth failed:", err);
      return { redirect: { destination: redirectIfBlocked, permanent: false } };
    }
  };
}


// // lib/withAuth.js
// export function withAuth(handler, options = {}) {
//   return async (context) => {
//     const { req } = context;
//     const token = req.cookies?.token || null;

//     const {
//       allowGuests = false,    // can guests view?
//       blockRoles = [],        // roles not allowed
//     } = options;

//     // Guest logic
//     if (!token) {
//       if (allowGuests) {
//         return handler ? handler(context) : { props: {} };
//       }
//       return {
//         redirect: { destination: "/", permanent: false },
//       };
//     }

//     try {
//       // Verify token with backend
//       let baseUrl = "";

//       if (typeof window === "undefined") {
//         // Server-side
//         const protocol = context.req.headers["x-forwarded-proto"] || "http";
//         const host = context.req.headers.host;
//         baseUrl = `${protocol}://${host}`;
//       } else {
//         // Client-side
//         baseUrl = "";
//       }

//       const res = await fetch(`${baseUrl}/api/auth/me`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       if (!res.ok) {
//         return {
//           redirect: { destination: "/", permanent: false },
//         };
//       }

//       const data = await res.json();
//       const user = data.user;

//       // Role restriction
//       if (blockRoles.includes(user.role)) {
//         return {
//           redirect: { destination: "/admin_panel", permanent: false },
//         };
//       }

//       // Pass user to page props
//       const baseProps = handler ? await handler(context) : { props: {} };
//       return {
//         ...baseProps,
//         props: { ...baseProps.props, user },
//       };
//     } catch (err) {
//       console.error("SSR auth failed:", err);
//       return {
//         redirect: { destination: "/", permanent: false },
//       };
//     }
//   };
// }
