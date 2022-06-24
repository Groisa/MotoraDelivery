import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "./firebase"
type Props = {
    email: string
    password: string
}
export const loginUser = async ({email, password}: Props) => {
    const result = await signInWithEmailAndPassword(auth, email, password)
    console.log(result)
}