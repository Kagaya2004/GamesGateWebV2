import { useState, Fragment, useEffect } from 'react'
import axiosClient from '../../axiosClient'
import { Link, useNavigate, useParams } from 'react-router-dom';

function GeneroDoJogoFormDestroy() {

  const navigate = useNavigate();
  const [generoDoJogo, setGeneroDoJogo] = useState({
    id: null,
    jogo_id: '',
    genero_id: '',
  })
  const { id } = useParams();
  
  if (id){
    useEffect(() => {
      axiosClient.get(`/generodojogo/show/${id}`)
        .then(({data}) => {
          setGeneroDoJogo(data.data);
        }).catch((error) => {
          console.log(error);
        })
    }, [id]);
  }

    const OnSubmit = (e) => {
      e.preventDefault();
      axiosClient.delete(`/generodojogo/destroy/${id}`)
        .then(() => {
          setGeneroDoJogo({});
          navigate('/generodojogo/index');
        }).catch((error) => {
          console.log(error);
        })
    }
    const OnCancel = () => {
      navigate('/generodojogo/index');
    }

  return (
    <Fragment>
      <div className='display'>
        <div className='card animated fadeInDown'>
          {generodojogo.id && <h1>Exclusão da Conexão entre Gênero e Jogo: {generoDoJogo.id}  </h1>}
          {generodojogo.id && <h1>Gênero: {generodojogo.genero_id}  </h1>}
          {generodojogo.id && <h2>Jogo: {generodojogo.jogo_id}  </h2>}

        </div>

        <form onSubmit={(e)=>OnSubmit(e)}>
          <button 
            className='btn btn-delete'>
              Excluir
          </button>
          <Link 
            type='button'
            className='btn btn-cancel'
            to='/generodojogo/index'>
              Cancelar
          </Link>
        </form>
      </div>
    </Fragment>
  )
}

export default GeneroDoJogoFormDestroy