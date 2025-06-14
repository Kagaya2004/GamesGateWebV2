import { useState, Fragment, useEffect } from 'react'
import axiosClient from '../../axiosClient'
import { Link, useNavigate, useParams } from 'react-router-dom';

function BibliotecaFormDestroy() {

  const navigate = useNavigate();
  const [biblioteca, setBiblioteca] = useState({
    id: null,
    quantidadeJogos: '',
    user_id:'',
  })
  const { id } = useParams();
  
  if (id){
    useEffect(() => {
      axiosClient.get(`/biblioteca/show/${id}`)
        .then(({data}) => {
          setBiblioteca(data.data);
        }).catch((error) => {
          console.log(error);
        })
    }, [id]);
  }

    const OnSubmit = (e) => {
      e.preventDefault();
      axiosClient.delete(`/biblioteca/destroy/${id}`)
        .then(() => {
          setBiblioteca({});
          navigate('/biblioteca/index');
        }).catch((error) => {
          console.log(error);
        })
    }
    const OnCancel = () => {
      navigate('/biblioteca/index');
    }

  return (
    <Fragment>
      <div className='display'>
        <div className='card animated fadeInDown'>
          {biblioteca.id && <h1>Exclusão de Biblioteca: {biblioteca.id}  </h1>}
          {biblioteca.id && <h2>Id do Usuário: {biblioteca.user_id}  </h2>}
        </div>

        <form onSubmit={(e)=>OnSubmit(e)}>
          <button 
            className='btn btn-delete'>
              Excluir
          </button>
          <Link 
            type='button'
            className='btn btn-cancel'
            to='/biblioteca/index'>
              Cancelar
          </Link>
        </form>
      </div>
    </Fragment>
  )
}

export default BibliotecaFormDestroy