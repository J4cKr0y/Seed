/**
 * AUTH FACEBOOK OAUTH
 */

export async function login() {
  window.location.href = "/api/auth/facebook"
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
  console.warn("Facebook OAuth ne gère pas le reset password.")
  return null
}