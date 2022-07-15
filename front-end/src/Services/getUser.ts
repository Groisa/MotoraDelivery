import { doc, getDoc } from "firebase/firestore"
import { db } from "./firebase"


export const getUser = async (user: string) => {
    const snapshort = await getDoc(doc(db, 'users', user))
    if (!snapshort.exists()) {
        throw new Error('User not found')
    }
    const data = snapshort.data()
    return {
        id: user,
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
        date: data.date,
        cpf: data.cpf,
        placa: data.placa,
        model: data.model,
        type: data.type,
    }
}