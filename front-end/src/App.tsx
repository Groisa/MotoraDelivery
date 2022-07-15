import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom'
import { auth } from './Services/firebase';
import { getUser } from './Services/getUser';
import { deletUserCliente, updateUserCliente } from './Store/slices/userSlicesCliente';
import { deletUserMotora, updateUserMotora } from './Store/slices/userSlicesMotora';
import { HomeView } from './Views/HomeView';
import { LoginPage } from './Views/LoginView';
import { NewOrde } from './Views/NewOrder/newOrder';
import { MotoraRegister } from './Views/Register/registerMotora';
import { RegisterUsuario } from './Views/Register/registerUser';
function App() {
  const dispath = useDispatch()
  useEffect(() => {
    const getAuth = async () => {
      await onAuthStateChanged(auth, async (user) => {
        if (user) {
          const userType = await getUser(user.uid)
          if (userType.type === 'Cliente') {
            dispath(updateUserCliente(userType))
            dispath(deletUserMotora())
          }
          if (userType.type === 'Motora') {
            dispath(updateUserMotora(userType))
            dispath(deletUserCliente())
          }
        } else {
          console.log('tem nada')
          dispath(deletUserMotora())
          dispath(deletUserCliente())
        }
      })
    }
    getAuth()
  }, [])
  return (
    <Routes>
      <Route path='/' element={<HomeView />} />
      <Route path='/cadastro-motora' element={<MotoraRegister />} />
      <Route path='/cadastro-usuario' element={<RegisterUsuario />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/novo-pedido' element={<NewOrde />} />
    </Routes>
  );
}

export default App;

