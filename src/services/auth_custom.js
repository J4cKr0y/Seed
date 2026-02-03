/**
 * AUTH CUSTOM
 * Pour un backend maison (Node, Go, PHP, Python…)
 */

export async function login(email, password) {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password })
  })
  if (!res.ok) return null
  return await res.json()
}

export async function register(data) {
  const res = await fetch("/api/auth/register", {
    method: "POST",
    body: JSON.stringify(data)
  })
  if (!res.ok) return null
  return await res.json()
}

export async function logout() {
  await fetch("/api/auth/logout", { method: "POST" })
  return true
}

export async function getCurrentUser() {
  const res = await fetch("/api/auth/me")
  if (!res.ok) return null
  return await res.json()
}

export async function sendPasswordReset(email) {
  await fetch("/api/auth/reset", {
    method: "POST",
    body: JSON.stringify({ email })
  })
  return true
}