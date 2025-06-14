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
      senhaConfirmacao: '',
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
    // Monta o payload conforme o backend espera
    const payload = {
      ...user,
      senha_confirmation: user.senhaConfirmacao, // campo que o Laravel espera
    };
    delete payload.senhaConfirmacao; // não envie esse campo para o backend

    axiosClient.put(`/user/update/${id}`, payload)
      .then((data) => {
        navigate('/user/index');
      }).catch((error) => {
        console.log(error);
      })
  }

  return (
    <Fragment>
      <div className='form-update'>
        <div className='form-title'>
          {user.id && <>Atualização de usuário: {user.nome}</>}
        </div>
        <form onSubmit={OnSubmit}>
          <label>Nome Completo</label>
          <input
              type="text"
              value={user.nome}
              placeholder="Nome Completo"
              onChange={e => setUser({ ...user, nome: e.target.value })}
          />
          <label>Apelido do Usuário</label>
          <input
              type="text"
              value={user.apelido}
              placeholder="Apelido do Usuário"
              onChange={e => setUser({ ...user, apelido: e.target.value })}
          />
          <label>Data de Nascimento</label>
          <input
              type='date'
              value={user.dataNascimento}
              placeholder="Data de Nascimento"
              onChange={e => setUser({ ...user, dataNascimento: e.target.value })}
          />
          <label>Email</label>
          <input
              type="email"
              value={user.email}
              placeholder="Email"
              onChange={e => setUser({ ...user, email: e.target.value })}
          />
          <label>Senha</label>
          <input
              type="password"
              value={user.senha}
              placeholder="Senha"
              onChange={e => setUser({ ...user, senha: e.target.value })}
          />
          <label>Confirmação de Senha</label>
          <input
              type="password"
              value={user.senhaConfirmacao}
              placeholder="Senha"
              onChange={e => setUser({ ...user, senhaConfirmacao: e.target.value })}
          />
          <label>Descrição</label>
          <input
              type="text"
              value={user.descricao}
              placeholder="Descrição"
              onChange={e => setUser({ ...user, descricao: e.target.value })}
          />
          <label>Status</label>
          <input
              type="text"
              value={user.status}
              placeholder="Status"
              onChange={e => setUser({ ...user, status: e.target.value })}
          />
          <div className="form-update-actions">
            <button type="submit" className='btn-save'>Salvar</button>
            <Link className='btn-cancel' to='/user/index'>Cancelar</Link>
          </div>
        </form>
      </div>
    </Fragment>
  )
}

export default UserFormUpdate