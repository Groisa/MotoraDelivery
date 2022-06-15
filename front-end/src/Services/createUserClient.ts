import { createUserWithEmailAndPassword } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import { UserClient } from "../Entites/User"
import { auth, db } from "./firebase"

type NewDate = {
    name: string
    email: string
    phone: string
    password: string
    address: string
    date: string
    file: string
    type: string
}

export const createUserCliente = async ({ name, email, password, phone, address, date, file, type }: NewDate): Promise<UserClient> => {
    const result = await createUserWithEmailAndPassword(auth, email, password)
    setDoc(doc(db, 'users', result.user.uid), {
        name,
        email,
        phone,
        address,
        date,
        file,
        type,
    })
    return {
        id: result.user.uid,
        name,
        email,
        phone,
        address,
        date,
        file,
        type,
    }
}   