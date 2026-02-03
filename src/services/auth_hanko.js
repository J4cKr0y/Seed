/**
 * AUTH HANKO
 */

import { Hanko } from "@teamhanko/hanko-elements"

const hanko = new Hanko(import.meta.env.PUBLIC_HANKO_API_URL)

export async function login() {
  return hanko.user.getCurrent()
}

export async function register() {
  return hanko.user.getCurrent()
}

export async function logout() {
  return hanko.user.logout()
}

export async function getCurrentUser() {
  return hanko.user.getCurrent()
}
m
export async function sendPasswordReset() {
  console.warn("Hanko utilise WebAuthn, pas de reset password.")
  return null
}