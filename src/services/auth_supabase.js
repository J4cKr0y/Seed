/**
 * AUTH SUPABASE
 */

import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  import.meta.env.PUBLIC_SUPABASE_URL,
  import.meta.env.PUBLIC_SUPABASE_ANON_KEY
)

export async function login(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) return null
  return data
}

export async function register({ email, password }) {
  const { data, error } = await supabase.auth.signUp({ email, password })
  if (error) return null
  return data
}

export async function logout() {
  await supabase.auth.signOut()
  return true
}

export async function getCurrentUser() {
  const { data } = await supabase.auth.getUser()
  return data?.user ?? null
}

export async function sendPasswordReset(email) {
  await supabase.auth.resetPasswordForEmail(email)
  return true
}