/**
 * AUTH GOOGLE OAUTH
 */

export async function login() {
  window.location.href = "/api/auth/google"
}

export async function register() {
  return login()
}

export async function logout() {
  await fetch("/api/auth/logout")
  return true
}

export async function getCurrentUser() {
  const res = await fetch("/api/auth/me")
  if (!res.ok) return null
  return await res.json()
}

export async function sendPasswordReset() {
  console.warn("Google OAuth ne gère pas le reset password.")
  return null
}