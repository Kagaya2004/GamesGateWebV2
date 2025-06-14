import { useState, Fragment, useEffect } from 'react'
import axiosClient from '../../axiosClient'
import { Link, useNavigate, useParams } from 'react-router-dom';

function UserFormDestroy() {

  const navigate = useNavigate();
  const [user, setUser] = useState({
    id: null,
    nome: '',
    apelido: '',
    email: ''
  })
  const { id } = useParams();
  
  useEffect(() => {
    if (id) {
      axiosClient.get(`/user/show/${id}`)
        .then(({data}) => {
          setUser(data.data);
        }).catch((error) => {
          console.log(error);
        })
    }
  }, [id]);

  const OnSubmit = (e) => {
    e.preventDefault();
    axiosClient.delete(`/user/destroy/${id}`)
      .then(() => {
        setUser({});
        navigate('/user/index');
      }).catch((error) => {
        console.log(error);
      })
  }

  return (
    <Fragment>
      <div className="form-destroy">
        <div className="form-title">
          Exclusão do usuário: {user.apelido}
        </div>
        <div className="form-info">
          <strong>Nome de Usuário:</strong> {user.nome}
        </div>
        <div className="form-info">
          <strong>Email:</strong> {user.email}
        </div>
        <form onSubmit={OnSubmit} className="form-destroy-actions">
          <button className="btn-delete" type="submit">
            Excluir
          </button>
          <Link className="btn-cancel" to="/user/index">
            Cancelar
          </Link>
        </form>
      </div>
    </Fragment>
  )
}

export default UserFormDestroy