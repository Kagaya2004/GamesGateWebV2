import { useState, Fragment, useEffect } from 'react'
import axiosClient from '../../axiosClient'
import { Link, useNavigate, useParams } from 'react-router-dom';

function AnaliseFormUpdate() {

  const navigate = useNavigate();
  const [analise, setAnalise] = useState({
      id: null,
      titulo: '',
      curtidas:'',
      user_id:'',
      jogo_id:'',
  });

  const { id } = useParams();
  
  if (id){
    useEffect(() => {
      axiosClient.get(`/analise/show/${id}`)
        .then(({data}) => {
          setAnalise(data.data);
        }).catch((error) => {
          console.log(error);
        })
    }, [analise.id]);
  }

    const OnSubmit = (e) => {
      e.preventDefault();
      axiosClient.put(`/analise/update/${id}`, analise)
        .then((data) => {
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
          {analise.id && <h1>Atualização de Análise: {analise.id}  </h1>}
          {analise.id && <h2>Id do Usuário: {analise.user_id}  </h2>}
        </div>

        <form onSubmit={(e)=>OnSubmit(e)}>

          <input
              type="text"
              value={analise.titulo}
              placeholder="Título da Análise "
              onChange={
                  e => setAnalise({
                      ...analise, titulo: e.target.value
                  })
              }
          />
          <input
              type="text"
              value={analise.curtidas}
              placeholder="Número de Curidas da Análise "
              onChange={
                  e => setAnalise({
                      ...analise, curtidas: e.target.value
                  })
              }
          />
          <input
              type="text"
              value={analise.user_id}
              placeholder="ID do Usuário da Análise "
              onChange={
                  e => setAnalise({
                      ...analise, user_id: e.target.value
                  })
              }
          />
          <input
              type="text"
              value={analise.jogo}
              placeholder="ID do Jogo da Análise "
              onChange={
                  e => setAnalise({
                      ...analise, jogo_id: e.target.value
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
            to='/analise/index'>
              Cancelar
          </Link>
        </form>
      </div>
    </Fragment>
  )
}

export default AnaliseFormUpdate