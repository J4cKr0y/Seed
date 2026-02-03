/**
 * AUTH.JS (NextAuth)
 * Utilisation via endpoints API.
 */

export async function login(email, password) {
  const res = await fetch("/api/auth/signin", {
    method: "POST",
    body: JSON.stringify({ email, password })
  })
  if (!res.ok) return null
  return await res.json()
}

export async function register() {
  console.warn("Auth.js ne gère pas l'inscription côté client.")
  return null
}

export async function logout() {
  await fetch("/api/auth/signout", { method: "POST" })
  return true
}

export async function getCurrentUser() {
  const res = await fetch("/api/auth/session")
  if (!res.ok) return null
  return await res.json()
}

export async function sendPasswordReset() {
  console.warn("Auth.js ne gère pas le reset password côté client.")
  return null
}