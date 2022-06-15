import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { UserMotora } from '../Entites/User'
import { auth, db } from './firebase'

type NewInput = {
    name: string
    email: string
    phone: string
    password: string
    address: string
    date: string
    cpf: string
    file: string
    placa: string
    model: string
    type: string
}

export const createUserMotoboy = async ({ email, password, name, phone, address, date, file, placa, model, type, cpf }: NewInput): Promise<UserMotora> => {
    const result = await createUserWithEmailAndPassword(auth, email, password)
    await setDoc(doc(db, 'users', result.user.uid), {
        name,
        phone,
        address,
        date,
        file,
        placa,
        model,
        type,
        cpf,
        email,
    })
    return {
        id: result.user.uid,
        name,
        phone,
        address,
        date,
        file,
        placa,
        model,
        type,
        cpf,
        email,
    }
}