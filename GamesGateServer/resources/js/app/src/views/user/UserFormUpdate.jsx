import { useState, Fragment, useEffect } from 'react'
import axiosClient from '../../axiosClient'
import { Link, useNavigate, useParams } from 'react-router-dom';

function UserFormUpdate() {

  const navigate = useNavigate();
  const [user, setUser] = useState({
      id: null,
      nome: '',
      apelido: '',
      dataNascimento: new Date().toISOString().split('T')[0],
      email: '',
      senha: '',
      descricao: '',
      status: '',
  });

  const { id } = useParams();
  
  if (id){
    useEffect(() => {
      axiosClient.get(`/user/show/${id}`)
        .then(({data}) => {
          setUser(data.data);
        }).catch((error) => {
          console.log(error);
        })
    }, [user.id]);
  }

    const OnSubmit = (e) => {
      e.preventDefault();
      axiosClient.put(`/user/update/${id}`, user)
        .then((data) => {
          navigate('/user/index');
        }).catch((error) => {
          console.log(error);
        })
    }
    const OnCancel = () => {
      navigate('/user/index');
    }

  return (
    <Fragment>
      <div className='display'>
        <div className='card animated fadeInDown'>
          {user.id && <h1>Exclusão de usuário: {user.name}  </h1>}
        </div>

        <form onSubmit={(e)=>OnSubmit(e)}>

          <input
              type="text"
              value={user.nome}
              placeholder="Nome Completo"
              onChange={
                  e => setUser({
                      ...user, name: e.target.value
                  })
              }
          />
          <input
              type="text"
              value={user.apelido}
              placeholder="Apelido do Usuário"
              onChange={
                  e => setUser({
                      ...user, apelido: e.target.value
                  })
              }
          />
          <input
              type='date'
              value={user.dataNascimento}
              placeholder="Data de Nascimento"
              onChange={
                  e => setUser({
                      ...user, dataNascimento: e.target.value
                  })
              }
          />
          <input
              value={user.email}
              placeholder="Email"
              onChange={
                  e => setUser({
                      ...user, email: e.target.value
                  })
              }
          />
          <input
              type="password"
              value={user.senha}
              placeholder="Senha"
              onChange={
                  e => setUser({
                      ...user, senha: e.target.value
                  })
              }
          />
          <input
              type="text"
              value={user.descricao}
              placeholder="Descrição"
              onChange={
                  e => setUser({
                      ...user, descricao: e.target.value
                  })
              }
          />
          <input
              type="text"
              value={user.status}
              placeholder="Status"
              onChange={
                  e => setUser({
                      ...user, Status: e.target.value
                  })
              }
          />
          <button 
            className='btn btn-edit'>
              Salvar
          </button>
          <Link 
            type='button'
            className='btn btn-cancel'
            to='/user/index'>
              Cancelar
          </Link>
        </form>
      </div>
    </Fragment>
  )
}

export default UserFormUpdate