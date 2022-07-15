import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "./firebase"

export const loginUser = async (values : any)=> {
    const result = await signInWithEmailAndPassword(auth, values.email, values.password)
    return result.user.uid
  }