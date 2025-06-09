import { useState, Fragment, useEffect } from 'react'
import axiosClient from '../../axiosClient'
import { Link, useNavigate, useParams } from 'react-router-dom';

function AvaliacaoFormDestroy() {

  const navigate = useNavigate();
  const [avaliacao, setAvaliacao] = useState({
    id: null,
    descricao: '',
    analise_id:'',
  })
  const { id } = useParams();
  
  if (id){
    useEffect(() => {
      axiosClient.get(`/avaliacao/show/${id}`)
        .then(({data}) => {
          setAvaliacao(data.data);
        }).catch((error) => {
          console.log(error);
        })
    }, [id]);
  }

    const OnSubmit = (e) => {
      e.preventDefault();
      axiosClient.delete(`/avaliacao/destroy/${id}`)
        .then(() => {
          setAvaliacao({});
          navigate('/avaliacao/index');
        }).catch((error) => {
          console.log(error);
        })
    }
    const OnCancel = () => {
      navigate('/avaliacao/index');
    }

  return (
    <Fragment>
      <div className='display'>
        <div className='card animated fadeInDown'>
          {avaliacao.id && <h1>Exclusão da Avaliação: {avaliacao.id}  </h1>}
          {avaliacao.id && <h1>Descrição: {avaliacao.descricao}  </h1>}
          {avaliacao.id && <h2>Id da Análise: {avaliacao.analise_id}  </h2>}

        </div>

        <form onSubmit={(e)=>OnSubmit(e)}>
          <button 
            className='btn btn-delete'>
              Excluir
          </button>
          <Link 
            type='button'
            className='btn btn-cancel'
            to='/avaliacao/index'>
              Cancelar
          </Link>
        </form>
      </div>
    </Fragment>
  )
}

export default AvaliacaoFormDestroy