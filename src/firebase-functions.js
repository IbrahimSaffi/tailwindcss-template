import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase-config";
async function createUser(email, password) {
    try {
      let userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user;
      return user
    }
    catch (error) {
      throw new Error(error)
    }
}

async function loginUser(email, password) {
  try {
    let userCredential = await signInWithEmailAndPassword(auth, email, password)
    const user = userCredential.user;
    return user
  }
  catch (error) {
    throw new Error(error)
  }
}

export { createUser, loginUser }