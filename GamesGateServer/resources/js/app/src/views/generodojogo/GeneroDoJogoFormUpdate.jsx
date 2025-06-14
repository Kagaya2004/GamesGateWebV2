import { useState, Fragment, useEffect } from 'react'
import axiosClient from '../../axiosClient'
import { Link, useNavigate, useParams } from 'react-router-dom';

function GeneroDoJogoFormUpdate() {

  const navigate = useNavigate();
  const [generoDoJogo, setGeneroDoJogo] = useState({
      id: null,
      genero_id: '',
      jogo_id:'',
  });

  const { id } = useParams();
  
  if (id){
    useEffect(() => {
      axiosClient.get(`/generodojogo/show/${id}`)
        .then(({data}) => {
          setGeneroDoJogo(data.data);
        }).catch((error) => {
          console.log(error);
        })
    }, [generoDoJogo.id]);
  }

    const OnSubmit = (e) => {
      e.preventDefault();
      axiosClient.put(`/generodojogo/update/${id}`, generoDoJogo)
        .then((data) => {
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
          {generoDoJogo.id && <h1>Atualização de Conexão entre Gênero e Jogo: {generoDoJogo.id}  </h1>}
          {generoDoJogo.id && <h2>Id do Gênero: {generoDoJogo.genero_id}  </h2>}
          {generoDoJogo.id && <h2>Id do Jogo: {generoDoJogo.jogo_id}  </h2>}
        </div>

        <form onSubmit={(e)=>OnSubmit(e)}>

          <input
              type="text"
              value={generoDoJogo.genero_id}
              placeholder="Gênero "
              onChange={
                  e => setGeneroDoJogo({
                      ...generoDoJogo, genero_id: e.target.value
                  })
              }
          />
          <input
              type="text"
              value={generoDoJogo.jogo}
              placeholder="Jogo "
              onChange={
                  e => setGeneroDoJogo({
                      ...generoDoJogo, jogo_id: e.target.value
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
            to='/generodojogo/index'>
              Cancelar
          </Link>
        </form>
      </div>
    </Fragment>
  )
}

export default GeneroDoJogoFormUpdate