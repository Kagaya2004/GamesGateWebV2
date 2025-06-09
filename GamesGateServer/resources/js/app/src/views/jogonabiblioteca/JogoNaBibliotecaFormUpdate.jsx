import { useState, Fragment, useEffect } from 'react'
import axiosClient from '../../axiosClient'
import { Link, useNavigate, useParams } from 'react-router-dom';

function JogoNaBibliotecaFormUpdate() {

  const navigate = useNavigate();
  const [jogonabiblioteca, setJogoNaBiblioteca] = useState({
      id: null,
      jogo_id:'',
      biblioteca_id:'',
  });

  const { id } = useParams();
  
  if (id){
    useEffect(() => {
      axiosClient.get(`/jogonabiblioteca/show/${id}`)
        .then(({data}) => {
          setJogoNaBiblioteca(data.data);
        }).catch((error) => {
          console.log(error);
        })
    }, [jogonabiblioteca.id]);
  }

    const OnSubmit = (e) => {
      e.preventDefault();
      axiosClient.put(`/jogonabiblioteca/update/${id}`, jogonabiblioteca)
        .then((data) => {
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
          {jogonabiblioteca.id && <h1>Atualização da Conexão entre Jogo e Biblioteca: {jogonabiblioteca.id}  </h1>}
          {jogonabiblioteca.id && <h2>Id do Jogo: {jogonabiblioteca.jogo_id}  </h2>}
          {jogonabiblioteca.id && <h2>Id do Biblioteca: {jogonabiblioteca.biblioteca_id}  </h2>}
        </div>

        <form onSubmit={(e)=>OnSubmit(e)}>
            <input
                type="text"
                value={jogonabiblioteca.biblioteca_id}
                placeholder="Id da Biblioteca"
                onChange={
                    e => setJogoNaBiblioteca({
                        ...jogonabiblioteca, biblioteca_id: e.target.value
                    })
                }
            />
            <input
                type="text"
                value={jogonabiblioteca.jogo_id}
                placeholder="Id do Jogo"
                onChange={
                    e => setJogoNaBiblioteca({
                        ...jogonabiblioteca, jogo_id: e.target.value
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
            to='/jogonabiblioteca/index'>
              Cancelar
          </Link>
        </form>
      </div>
    </Fragment>
  )
}

export default JogoNaBibliotecaFormUpdate