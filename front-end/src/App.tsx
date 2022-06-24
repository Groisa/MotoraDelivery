import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom'
import { auth } from './Services/firebase';
import { getUserClient, getUserMotora } from './Services/getUser';
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
          const userMotora = await getUserMotora(user.uid)
          const userClient = await getUserClient(user.uid)
          if (userClient.type === 'Cliente') {
            dispath(updateUserCliente(userClient))
            dispath(deletUserMotora())
          }
          if (userMotora.type === 'Motora') {
            dispath(updateUserMotora(userMotora))
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

