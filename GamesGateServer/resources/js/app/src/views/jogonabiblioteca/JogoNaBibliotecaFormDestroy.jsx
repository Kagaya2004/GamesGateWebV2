import { useState, Fragment, useEffect } from 'react'
import axiosClient from '../../axiosClient'
import { Link, useNavigate, useParams } from 'react-router-dom';

function JogoNaBibliotecaFormDestroy() {

  const navigate = useNavigate();
  const [jogonabiblioteca, setJogoNaBiblioteca] = useState({
    id: null,
    jogo_id:'',
    biblioteca_id:'',
  })
  const { id } = useParams();
  
  if (id){
    useEffect(() => {
      axiosClient.get(`/jogonabiblioteca/show/${id}`)
        .then(({data}) => {
          setJogoNaBiblioteca(data.data);
        }).catch((error) => {
          console.log(error);
        })
    }, [id]);
  }

    const OnSubmit = (e) => {
      e.preventDefault();
      axiosClient.delete(`/jogonabiblioteca/destroy/${id}`)
        .then(() => {
          setJogoNaBiblioteca({});
          navigate('/jogonabiblioteca/index');
        }).catch((error) => {
          console.log(error);
        })
    }
    const OnCancel = () => {
      navigate('/jogonabiblioteca/index');
    }

  return (
    <Fragment>
      <div className='display'>
        <div className='card animated fadeInDown'>
          {jogonabiblioteca.id && <h1>Exclusão da Conexão Jogo e Biblioteca: {jogonabiblioteca.id}  </h1>}
          {jogonabiblioteca.id && <h2>Id da Biblioteca: {jogonabiblioteca.biblioteca_id}  </h2>}
          {jogonabiblioteca.id && <h2>Id do Jogo: {jogonabiblioteca.jogo_id}  </h2>}
        </div>

        <form onSubmit={(e)=>OnSubmit(e)}>
          <button 
            className='btn btn-delete'>
              Excluir
          </button>
          <Link 
            type='button'
            className='btn btn-cancel'
            to='/jogonabiblioteca/index'>
              Cancelar
          </Link>
        </form>
      </div>
    </Fragment>
  )
}

export default JogoNaBibliotecaFormDestroy