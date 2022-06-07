import { Routes, Route } from 'react-router-dom'
import { HomeView } from './Views/HomeView';
import { MotoraRegister } from './Views/Register/registerMotora';
import { RegisterUsuario } from './Views/Register/registerUser';
function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeView/>}/>
      <Route path='/cadastro-motora' element={<MotoraRegister/>}/>
      <Route path='/cadastro-usuario' element={<RegisterUsuario/>}/>
    </Routes>
  );
}

export default App;

