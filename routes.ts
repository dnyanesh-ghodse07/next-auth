/**
 * An array of routes that are accessible to the public
 * these route do not require authentication
 * @type {string[]}
 */

export const publicRoutes: string[] = ["/",
    "/auth/new-verification"
];

/**
 * An array of routes that are used for authentication
 * these routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes: string[] = ["/auth/login", "/auth/register", '/auth/error'];

/**
 * The prefix for API authentication routes
 * Routes that are start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix: string = "/api/auth";

/**
 * The default redirect path after logging in
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT: string = "/settings";
