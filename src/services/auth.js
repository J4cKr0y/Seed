/**
 * AUTH.JS — Point d’entrée unique
 * 
 * Décommentez le provider que vous souhaitez utiliser.
 * Seed se chargera d'appeler les fonctions correspondantes.
 */

// --- Fournisseurs disponibles ---
// import * as provider from "./auth_supabase.js"
// import * as provider from "./auth_firebase.js"
// import * as provider from "./auth_authjs.js"
// import * as provider from "./auth_keycloak.js"
// import * as provider from "./auth_hanko.js"
// import * as provider from "./auth_clerk.js"
// import * as provider from "./auth_google.js"
// import * as provider from "./auth_facebook.js"
// import * as provider from "./auth_github.js"
// import * as provider from "./auth_custom.js"

// --- IMPORTANT ---
// Assurez-vous qu'un seul provider est décommenté.
// -----------------------------------------------

export const login = provider.login
export const register = provider.register
export const logout = provider.logout
export const getCurrentUser = provider.getCurrentUser
export const sendPasswordReset = provider.sendPasswordReset