import { useState, Fragment, useEffect } from 'react'
import axiosClient from '../../axiosClient'
import { Link, useNavigate, useParams } from 'react-router-dom';

function DesenvolvedoraFormDestroy() {

  const navigate = useNavigate();
  const [desenvolvedora, setDesenvolvedora] = useState({
    id: null,
    name: '',
    desenvolvedoraname: '',
    email: ''
  })
  const { id } = useParams();
  
  if (id){
    useEffect(() => {
      axiosClient.get(`/desenvolvedora/show/${id}`)
        .then(({data}) => {
          setDesenvolvedora(data.data);
        }).catch((error) => {
          console.log(error);
        })
    }, [id]);
  }

    const OnSubmit = (e) => {
      e.preventDefault();
      axiosClient.delete(`/desenvolvedora/destroy/${id}`)
        .then(() => {
          setDesenvolvedora({});
          navigate('/desenvolvedora/index');
        }).catch((error) => {
          console.log(error);
        })
    }
    const OnCancel = () => {
      navigate('/desenvolvedora/index');
    }

  return (
    <Fragment>
      <div className='display'>
        <div className='card animated fadeInDown'>
          {desenvolvedora.id && <h1>Exclusão de Desenvolvedora: {desenvolvedora.nome}  </h1>}
          {desenvolvedora.id && <h2>Nome de Desenvolvedora: {desenvolvedora.nome}  </h2>}
          {desenvolvedora.id && <h2>Email: {desenvolvedora.email}  </h2>}
        </div>

        <form onSubmit={(e)=>OnSubmit(e)}>
          <button 
            className='btn btn-delete'>
              Excluir
          </button>
          <Link 
            type='button'
            className='btn btn-cancel'
            to='/desenvolvedora/index'>
              Cancelar
          </Link>
        </form>
      </div>
    </Fragment>
  )
}

export default DesenvolvedoraFormDestroy