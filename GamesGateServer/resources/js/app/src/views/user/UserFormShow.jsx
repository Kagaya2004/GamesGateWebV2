import { useState, useEffect } from 'react'
import axiosClient from '../../axiosClient'
import { useNavigate, useParams } from 'react-router-dom';

function UserFormShow() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axiosClient.get(`/user/show/${id}`)
        .then(({ data }) => {
          setUser(data.data);
        }).catch((error) => {
          console.log(error);
        })
    }
  }, [id]);

  return (
    <div className="form-show">
      <div className="form-show-title">
        {user.id && <>Consulta do Usuário: <span style={{color:'#5b08a7'}}>{user.apelido}</span></>}
      </div>
      <div className="form-show-info-list">
        <div className="form-show-info-item">
          <span className="form-show-info-label">ID:</span> {user.id}
        </div>
        <div className="form-show-info-item">
          <span className="form-show-info-label">Nome Completo:</span> {user.nome}
        </div>
        <div className="form-show-info-item">
          <span className="form-show-info-label">Nome de Usuário:</span> {user.apelido}
        </div>
        <div className="form-show-info-item">
          <span className="form-show-info-label">Email:</span> {user.email}
        </div>
        <div className="form-show-info-item">
          <span className="form-show-info-label">Data de Nascimento:</span> {user.dataNascimento}
        </div>
        <div className="form-show-info-item">
          <span className="form-show-info-label">Descrição:</span> {user.descricao}
        </div>
        <div className="form-show-info-item">
          <span className="form-show-info-label">Status:</span> {user.status}
        </div>
      </div>
      <div className="form-show-actions">
        <button
          className="btn-cancel"
          style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '1rem' }}
          onClick={() => navigate('/user/index')}
        >
          <span style={{ fontSize: '1.2em' }}>←</span>
          Voltar
        </button>
      </div>
    </div>
  )
}

export default UserFormShow