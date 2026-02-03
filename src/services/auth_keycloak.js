/**
 * AUTH KEYCLOAK
 */

import Keycloak from "keycloak-js"

const keycloak = new Keycloak({
  url: import.meta.env.PUBLIC_KEYCLOAK_URL,
  realm: import.meta.env.PUBLIC_KEYCLOAK_REALM,
  clientId: import.meta.env.PUBLIC_KEYCLOAK_CLIENT_ID
})

export async function login() {
  await keycloak.init({ onLoad: "login-required" })
  return keycloak.token
}

export async function register() {
  await keycloak.register()
}

export async function logout() {
  await keycloak.logout()
}

export async function getCurrentUser() {
  await keycloak.init()
  return keycloak.tokenParsed ?? null
}

export async function sendPasswordReset() {
  await keycloak.accountManagement()
}