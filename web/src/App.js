import React, { useState, useEffect } from 'react';
import api from './services/api';
import DevForm from './components/DevForm';
import Devitem from './components/DevItem';

//import Header from './Header'
//Componente: bloco isolado (função) que retonar conteudos html, css, javascript  que não interfere no restante da aplicação.
//Propriedade: informações que um componente PAI passa para o componente filho
//Estado: informações mantidas pelo companente (Lembrar: imutablidade).
import './global.css';
import './App.css';
import './SideBar.css'
import './Main.css'


function App() {
  
  const [devs, setDevs] = useState([]);

  useEffect(() => {
      async function loadDevs() {
        const response = await api.get('/devs');
        setDevs(response.data);
      }
      loadDevs();
  }, [])
 
 
  async function handleAddDev(data) {
  
    const response = await api.post('/devs', data);

  

    setDevs([...devs, response.data]);
  
  } 


  return (
      <div id="app">
        <aside>
          <strong>Cadastrar</strong>
          <DevForm onSubmit={handleAddDev}/>
        </aside>
        <main>
          <ul>
            {devs.map(dev => (
              <Devitem key={dev._id} dev={dev} />
            ))}
          </ul>
        </main>
      </div>
    );
}

export default App;
