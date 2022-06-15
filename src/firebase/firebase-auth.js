import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./config";
import { createUser } from "./firestore-requests";

export const signup = async (signupFormData) => {
  const { displayName, email, password } = signupFormData;
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await createUser(user.uid);
    return user.uid;
  } catch (error) {
    throw error;
  }
};

export const login = async (loginFormData) => {
  const { email, password } = loginFormData;
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user.uid;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  await signOut(auth);
};
