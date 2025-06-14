import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Login from '../views/Login/Login'
import Signup from '../views/Login/Signup'
import ForgotPassword from '../views/Login/ForgotPassword'
import UpdatePassword from '../views/Login/UpdatePassword'
import Layout from './Layout'
import Dashboard from '../components/Dashboard'

import UserFormList from '../views/user/UserFormList'
import UserFormStore from '../views/user/UserFormStore'
import UserFormUpdate from '../views/user/UserFormUpdate'
import UserFormShow from '../views/user/UserFormShow'
import UserFormDestroy from '../views/user/UserFormDestroy'

import AnaliseFormList from '../views/analise/AnaliseFormList'
import AnaliseFormStore from '../views/analise/AnaliseFormStore'
import AnaliseFormUpdate from '../views/analise/AnaliseFormUpdate'
import AnaliseFormShow from '../views/analise/AnaliseFormShow'
import AnaliseFormDestroy from '../views/analise/AnaliseFormDestroy'

import AvaliacaoFormList from '../views/avaliacao/AvaliacaoFormList'
import AvaliacaoFormStore from '../views/avaliacao/AvaliacaoFormStore'
import AvaliacaoFormUpdate from '../views/avaliacao/AvaliacaoFormUpdate'
import AvaliacaoFormShow from '../views/avaliacao/AvaliacaoFormShow'
import AvaliacaoFormDestroy from '../views/avaliacao/AvaliacaoFormDestroy'

import BibliotecaFormList from '../views/biblioteca/BibliotecaFormList'
import BibliotecaFormStore from '../views/biblioteca/BibliotecaFormStore'
import BibliotecaFormUpdate from '../views/biblioteca/BibliotecaFormUpdate'
import BibliotecaFormShow from '../views/biblioteca/BibliotecaFormShow'
import BibliotecaFormDestroy from '../views/biblioteca/BibliotecaFormDestroy'

import DesenvolvedoraFormList from '../views/desenvolvedora/DesenvolvedoraFormList'
import DesenvolvedoraFormStore from '../views/desenvolvedora/DesenvolvedoraFormStore'
import DesenvolvedoraFormUpdate from '../views/desenvolvedora/DesenvolvedoraFormUpdate'
import DesenvolvedoraFormShow from '../views/desenvolvedora/DesenvolvedoraFormShow'
import DesenvolvedoraFormDestroy from '../views/desenvolvedora/DesenvolvedoraFormDestroy'

import GeneroFormList from '../views/genero/GeneroFormList'
import GeneroFormStore from '../views/genero/GeneroFormStore'
import GeneroFormUpdate from '../views/genero/GeneroFormUpdate'
import GeneroFormShow from '../views/genero/GeneroFormShow'
import GeneroFormDestroy from '../views/genero/GeneroFormDestroy'


import GeneroDoJogoFormList from '../views/generodojogo/GeneroDoJogoFormList'
import GeneroDoJogoFormStore from '../views/generodojogo/GeneroDoJogoFormStore'
import GeneroDoJogoFormUpdate from '../views/generodojogo/GeneroDoJogoFormUpdate'
import GeneroDoJogoFormShow from '../views/generodojogo/GeneroDoJogoFormShow'
import GeneroDoJogoFormDestroy from '../views/generodojogo/GeneroDoJogoFormDestroy'

import JogoFormList from '../views/jogo/JogoFormList'
import JogoFormStore from '../views/jogo/JogoFormStore'
import JogoFormUpdate from '../views/jogo/JogoFormUpdate'
import JogoFormShow from '../views/jogo/JogoFormShow'
import JogoFormDestroy from '../views/jogo/JogoFormDestroy'

import JogoNaBibliotecaFormList from '../views/jogonabiblioteca/JogoNaBibliotecaFormList'
import JogoNaBibliotecaFormStore from '../views/jogonabiblioteca/JogoNaBibliotecaFormStore'
import JogoNaBibliotecaFormUpdate from '../views/jogonabiblioteca/JogoNaBibliotecaFormUpdate'
import JogoNaBibliotecaFormShow from '../views/jogonabiblioteca/JogoNaBibliotecaFormShow'
import JogoNaBibliotecaFormDestroy from '../views/jogonabiblioteca/JogoNaBibliotecaFormDestroy'


const Rotas = () => {
  return (
    <Routes>
      {/* Páginas de login e princial */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/update-password" element={<UpdatePassword />} />
      <Route path="/dashboard" element={<Dashboard />} />
      
      <Route element={<Layout />}>
        {/* usuarios */}
        <Route path="/user/index" element={<UserFormList />} />
        <Route path="/user/store" element={<UserFormStore />} />
        <Route path="/user/update/:id" element={<UserFormUpdate />} />
        <Route path="/user/show/:id" element={<UserFormShow />} />
        <Route path="/user/destroy/:id" element={<UserFormDestroy />} />

        {/* generodojogos */}
        <Route path="/generodojogo/index" element={<GeneroDoJogoFormList />} />
        <Route path="/generodojogo/store" element={<GeneroDoJogoFormStore />} />
        <Route path="/generodojogo/update/:id" element={<GeneroDoJogoFormUpdate />} />
        <Route path="/generodojogo/show/:id" element={<GeneroDoJogoFormShow />} />
        <Route path="/generodojogo/destroy/:id" element={<GeneroDoJogoFormDestroy />} />

        {/* avaliacoes */}
          <Route path="/avaliacao/index" element={<AvaliacaoFormList />} />
          <Route path="/avaliacao/store" element={<AvaliacaoFormStore />} />
          <Route path="/avaliacao/update/:id" element={<AvaliacaoFormUpdate />} />
          <Route path="/avaliacao/show/:id" element={<AvaliacaoFormShow />} />
          <Route path="/avaliacao/destroy/:id" element={<AvaliacaoFormDestroy />} />

          {/* biblioteca */}
        <Route path="/biblioteca/index" element={<BibliotecaFormList />} />
        <Route path="/biblioteca/store" element={<BibliotecaFormStore />} />
        <Route path="/biblioteca/update/:id" element={<BibliotecaFormUpdate />} />
        <Route path="/biblioteca/show/:id" element={<BibliotecaFormShow />} />
        <Route path="/biblioteca/destroy/:id" element={<BibliotecaFormDestroy />} />

        {/* desenvolvedoras */}
        <Route path="/desenvolvedora/index" element={<DesenvolvedoraFormList />} />
        <Route path="/desenvolvedora/store" element={<DesenvolvedoraFormStore />} />
        <Route path="/desenvolvedora/update/:id" element={<DesenvolvedoraFormUpdate />} />
        <Route path="/desenvolvedora/show/:id" element={<DesenvolvedoraFormShow />} />
        <Route path="/desenvolvedora/destroy/:id" element={<DesenvolvedoraFormDestroy />} />

        {/* generos */}
        <Route path="/genero/index" element={<GeneroFormList />} />
        <Route path="/genero/store" element={<GeneroFormStore />} />
        <Route path="/genero/update/:id" element={<GeneroFormUpdate />} />
        <Route path="/genero/show/:id" element={<GeneroFormShow />} />
        <Route path="/genero/destroy/:id" element={<GeneroFormDestroy />} />

        {/* analises */}
        <Route path="/analise/index" element={<AnaliseFormList />} />
        <Route path="/analise/store" element={<AnaliseFormStore />} />
        <Route path="/analise/update/:id" element={<AnaliseFormUpdate />} />
        <Route path="/analise/show/:id" element={<AnaliseFormShow />} />
        <Route path="/analise/destroy/:id" element={<AnaliseFormDestroy />} />

        {/* jogos */}
        <Route path="/jogo/index" element={<JogoFormList />} />
        <Route path="/jogo/store" element={<JogoFormStore />} />
        <Route path="/jogo/update/:id" element={<JogoFormUpdate />} />
        <Route path="/jogo/show/:id" element={<JogoFormShow />} />
        <Route path="/jogo/destroy/:id" element={<JogoFormDestroy />} />

        {/* jogonabibliotecas */}
        <Route path="/jogonabiblioteca/index" element={<JogoNaBibliotecaFormList />} />
        <Route path="/jogonabiblioteca/store" element={<JogoNaBibliotecaFormStore />} />
        <Route path="/jogonabiblioteca/update/:id" element={<JogoNaBibliotecaFormUpdate />} />
        <Route path="/jogonabiblioteca/show/:id" element={<JogoNaBibliotecaFormShow />} />
        <Route path="/jogonabiblioteca/destroy/:id" element={<JogoNaBibliotecaFormDestroy />} />
      </Route>
    </Routes>
  )
}

export default Rotas