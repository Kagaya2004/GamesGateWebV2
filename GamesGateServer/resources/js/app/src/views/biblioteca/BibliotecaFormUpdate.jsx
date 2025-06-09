import { useState, Fragment, useEffect } from 'react'
import axiosClient from '../../axiosClient'
import { Link, useNavigate, useParams } from 'react-router-dom';

function BibliotecaFormUpdate() {

  const navigate = useNavigate();
  const [biblioteca, setBiblioteca] = useState({
      id: null,
      user_id: '',
  });

  const { id } = useParams();
  
  if (id){
    useEffect(() => {
      axiosClient.get(`/biblioteca/show/${id}`)
        .then(({data}) => {
          setBiblioteca(data.data);
        }).catch((error) => {
          console.log(error);
        })
    }, [biblioteca.id]);
  }

    const OnSubmit = (e) => {
      e.preventDefault();
      axiosClient.put(`/biblioteca/update/${id}`, biblioteca)
        .then((data) => {
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
          {biblioteca.id && <h1>Atualização de Biblioteca: {biblioteca.id}  </h1>}
          {biblioteca.id && <h2>Id do Usuário: {biblioteca.user_id}  </h2>}
        </div>

        <form onSubmit={(e)=>OnSubmit(e)}>

          <input
              type="text"
              value={biblioteca.nome}
              placeholder="ID do Usuário"
              onChange={
                  e => setBiblioteca({
                      ...biblioteca, user_id: e.target.value
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
            to='/biblioteca/index'>
              Cancelar
          </Link>
        </form>
      </div>
    </Fragment>
  )
}

export default BibliotecaFormUpdate