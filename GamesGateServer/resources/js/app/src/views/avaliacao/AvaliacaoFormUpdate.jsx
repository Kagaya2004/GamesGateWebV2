import { useState, Fragment, useEffect } from 'react'
import axiosClient from '../../axiosClient'
import { Link, useNavigate, useParams } from 'react-router-dom';

function AvaliacaoFormUpdate() {

  const navigate = useNavigate();
  const [avaliacao, setAvaliacao] = useState({
      id: null,
      descricao: '',
      avaliacao_id:'',
  });

  const { id } = useParams();
  
  if (id){
    useEffect(() => {
      axiosClient.get(`/avaliacao/show/${id}`)
        .then(({data}) => {
          setAvaliacao(data.data);
        }).catch((error) => {
          console.log(error);
        })
    }, [avaliacao.id]);
  }

    const OnSubmit = (e) => {
      e.preventDefault();
      axiosClient.put(`/avaliacao/update/${id}`, avaliacao)
        .then((data) => {
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
          {avaliacao.id && <h1>Atualização de Avaliação: {avaliacao.id}  </h1>}
          {avaliacao.id && <h2>Descrição: {avaliacao.descricao}  </h2>}
          {avaliacao.id && <h2>Id da Análise: {avaliacao.analise_id}  </h2>}
        </div>

        <form onSubmit={(e)=>OnSubmit(e)}>
          <input
              type="text"
              value={avaliacao.descricao}
              placeholder="Descrição da Avaliação "
              onChange={
                  e => setAvaliacao({
                      ...avaliacao, descricao: e.target.value
                  })
              }
          />
          <input
              type="text"
              value={avaliacao.user_id}
              placeholder="ID da Análise da Avaliação "
              onChange={
                  e => setAvaliacao({
                      ...avaliacao, user_id: e.target.value
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
            to='/avaliacao/index'>
              Cancelar
          </Link>
        </form>
      </div>
    </Fragment>
  )
}

export default AvaliacaoFormUpdate