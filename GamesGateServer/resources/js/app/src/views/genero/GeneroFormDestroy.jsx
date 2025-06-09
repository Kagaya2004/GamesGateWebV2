import { useState, Fragment, useEffect } from 'react'
import axiosClient from '../../axiosClient'
import { Link, useNavigate, useParams } from 'react-router-dom';

function GeneroFormDestroy() {

  const navigate = useNavigate();
  const [genero, setGenero] = useState({
    id: null,
    name: '',
    descricao: ''
  })
  const { id } = useParams();
  
  if (id){
    useEffect(() => {
      axiosClient.get(`/genero/show/${id}`)
        .then(({data}) => {
          setGenero(data.data);
        }).catch((error) => {
          console.log(error);
        })
    }, [id]);
  }

    const OnSubmit = (e) => {
      e.preventDefault();
      axiosClient.delete(`/genero/destroy/${id}`)
        .then(() => {
          setGenero({});
          navigate('/genero/index');
        }).catch((error) => {
          console.log(error);
        })
    }
    const OnCancel = () => {
      navigate('/genero/index');
    }

  return (
    <Fragment>
      <div className='display'>
        <div className='card animated fadeInDown'>
          {genero.id && <h1>Exclusão de Gênero: {genero.nome}  </h1>}
          {genero.id && <h2>Nome de Gênero: {genero.nome}  </h2>}
          {genero.id && <h2>Descrição: {genero.descricao}  </h2>}
        </div>

        <form onSubmit={(e)=>OnSubmit(e)}>
          <button 
            className='btn btn-delete'>
              Excluir
          </button>
          <Link 
            type='button'
            className='btn btn-cancel'
            to='/genero/index'>
              Cancelar
          </Link>
        </form>
      </div>
    </Fragment>
  )
}

export default GeneroFormDestroy