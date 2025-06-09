import { useState, Fragment, useEffect } from 'react'
import axiosClient from '../../axiosClient'
import { Link, useNavigate, useParams } from 'react-router-dom';

function JogoFormDestroy() {

  const navigate = useNavigate();
  const [jogo, setJogo] = useState({
    id: null,
    name: '',
    username: '',
    email: ''
  })
  const { id } = useParams();
  
  if (id){
    useEffect(() => {
      axiosClient.get(`/jogo/show/${id}`)
        .then(({data}) => {
          setJogo(data.data);
        }).catch((error) => {
          console.log(error);
        })
    }, [id]);
  }

    const OnSubmit = (e) => {
      e.preventDefault();
      axiosClient.delete(`/jogo/destroy/${id}`)
        .then(() => {
          setJogo({});
          navigate('/jogo/index');
        }).catch((error) => {
          console.log(error);
        })
    }
    const OnCancel = () => {
      navigate('/jogo/index');
    }

  return (
    <Fragment>
      <div className='display'>
        <div className='card animated fadeInDown'>
          {jogo.id && <h1>Exclusão do Jogo: {jogo.nome}  </h1>}
          {jogo.id && <h2>Nome do Jogo: {jogo.nome}  </h2>}
          {jogo.id && <h2>Data de Lançamento: {jogo.dataLancamento}  </h2>}
        </div>

        <form onSubmit={(e)=>OnSubmit(e)}>
          <button 
            className='btn btn-delete'>
              Excluir
          </button>
          <Link 
            type='button'
            className='btn btn-cancel'
            to='/jogo/index'>
              Cancelar
          </Link>
        </form>
      </div>
    </Fragment>
  )
}

export default JogoFormDestroy