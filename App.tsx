import { useState } from 'react';
import { Google } from './comp/login';
import { NavBar } from './comp/Nav'
import {EmpresaTabela} from './comp/Sec'



function App() {
  const [logado, setLogado] = useState(false);

  const eventoLogin = (event: React.FormEvent) => {
    event.preventDefault(); 
    setLogado(true);
  };

  return (
    <> 
      {!logado ? (
        <><NavBar /><Google /></>
      ) : (
        <><NavBar /><EmpresaTabela /></>
      )}
    </>
  );
}

export default App;
