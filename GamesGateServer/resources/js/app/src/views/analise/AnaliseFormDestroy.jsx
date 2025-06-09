import { useState, Fragment, useEffect } from 'react'
import axiosClient from '../../axiosClient'
import { Link, useNavigate, useParams } from 'react-router-dom';

function AnaliseFormDestroy() {

  const navigate = useNavigate();
  const [analise, setAnalise] = useState({
    id: null,
    titulo: '',
    curtidas:'',
    user_id:'',
    jogo_id:'',
  })
  const { id } = useParams();
  
  if (id){
    useEffect(() => {
      axiosClient.get(`/analise/show/${id}`)
        .then(({data}) => {
          setAnalise(data.data);
        }).catch((error) => {
          console.log(error);
        })
    }, [id]);
  }

    const OnSubmit = (e) => {
      e.preventDefault();
      axiosClient.delete(`/analise/destroy/${id}`)
        .then(() => {
          setAnalise({});
          navigate('/analise/index');
        }).catch((error) => {
          console.log(error);
        })
    }
    const OnCancel = () => {
      navigate('/analise/index');
    }

  return (
    <Fragment>
      <div className='display'>
        <div className='card animated fadeInDown'>
          {analise.id && <h1>Exclusão da Análise: {analise.id}  </h1>}
          {analise.id && <h1>Título da Análise: {analise.titulo}  </h1>}
          {analise.id && <h2>Número de Curtidas: {analise.curtidas}  </h2>}
          {analise.id && <h2>Id do Usuário: {analise.user_id}  </h2>}
          {analise.id && <h2>Id do Jogo: {analise.user_id}  </h2>}
        </div>

        <form onSubmit={(e)=>OnSubmit(e)}>
          <button 
            className='btn btn-delete'>
              Excluir
          </button>
          <Link 
            type='button'
            className='btn btn-cancel'
            to='/analise/index'>
              Cancelar
          </Link>
        </form>
      </div>
    </Fragment>
  )
}

export default AnaliseFormDestroy