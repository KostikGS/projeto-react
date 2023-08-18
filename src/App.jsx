import { useState } from "react";
import Perfil from "./components/Perfil";
import ReposList from "./components/ReposList";

function App() {
  const [formularioEstVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState ('')

  return (
  <>
    <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />

    {nomeUsuario.length > 4 && (
      <>
        <br/> <Perfil nomeUsuario={nomeUsuario} />
        <ReposList nomeUsuario={nomeUsuario}/>
      </>
    )}

    {/* {formularioEstVisivel && (
      <Formulario />
    )}

    <button onClick={() => setFormularioEstaVisivel(!formularioEstVisivel)} type="button">toogle form</button> */}
  </>
  )
}

export default App


