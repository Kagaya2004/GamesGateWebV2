import { useState, Fragment, useEffect } from 'react'
import axiosClient from '../../axiosClient'
import { Link, useNavigate, useParams } from 'react-router-dom';

function GeneroFormUpdate() {

  const navigate = useNavigate();
  const [genero, setGenero] = useState({
      id: null,
      nome: '',
      descricao: '',
  });

  const { id } = useParams();
  
  if (id){
    useEffect(() => {
      axiosClient.get(`/genero/show/${id}`)
        .then(({data}) => {
          setGenero(data.data);
        }).catch((error) => {
          console.log(error);
        })
    }, [genero.id]);
  }

    const OnSubmit = (e) => {
      e.preventDefault();
      axiosClient.put(`/genero/update/${id}`, genero)
        .then((data) => {
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
        </div>

        <form onSubmit={(e)=>OnSubmit(e)}>

          <input
              type="text"
              value={genero.nome}
              placeholder="Nome da Genero"
              onChange={
                  e => setGenero({
                      ...genero, nome: e.target.value
                  })
              }
          />
          <input
              type="text"
              value={genero.descricao}
              placeholder="Descrição"
              onChange={
                  e => setGenero({
                      ...genero, descricao: e.target.value
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
            to='/genero/index'>
              Cancelar
          </Link>
        </form>
      </div>
    </Fragment>
  )
}

export default GeneroFormUpdate