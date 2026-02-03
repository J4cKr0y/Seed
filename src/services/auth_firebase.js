/**
 * AUTH FIREBASE
 */

import { initializeApp } from "firebase/app"
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged
} from "firebase/auth"

const app = initializeApp({
  apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
  authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
})

const auth = getAuth(app)

export async function login(email, password) {
  return await signInWithEmailAndPassword(auth, email, password)
}

export async function register({ email, password }) {
  return await createUserWithEmailAndPassword(auth, email, password)
}

export async function logout() {
  return await signOut(auth)
}

export async function getCurrentUser() {
  return new Promise(resolve => {
    onAuthStateChanged(auth, user => resolve(user))
  })
}

export async function sendPasswordReset(email) {
  return await sendPasswordResetEmail(auth, email)
}