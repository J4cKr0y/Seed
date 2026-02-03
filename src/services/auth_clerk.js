/**
 * AUTH CLERK
 */

import { Clerk } from "@clerk/clerk-js"

const clerk = new Clerk(import.meta.env.PUBLIC_CLERK_PUBLISHABLE_KEY)
await clerk.load()

export async function login(email, password) {
  return await clerk.client.signIn.create({
    identifier: email,
    password
  })
}

export async function register({ email, password }) {
  return await clerk.client.signUp.create({
    emailAddress: email,
    password
  })
}

export async function logout() {
  await clerk.signOut()
  return true
}

export async function getCurrentUser() {
  return clerk.user ?? null
}

export async function sendPasswordReset(email) {
  return await clerk.client.passwords.reset(email)
}