import { useState, Fragment, useEffect } from 'react'
import axiosClient from '../../axiosClient'
import { Link, useNavigate, useParams } from 'react-router-dom';

function JogoFormUpdate() {

  const navigate = useNavigate();
  const [jogo, setJogo] = useState({
      id: null,
      nome: '',
      dataLancamento: new Date().toISOString().split('T')[0],
      descricao: '',
  });

  const { id } = useParams();
  
  if (id){
    useEffect(() => {
      axiosClient.get(`/jogo/show/${id}`)
        .then(({data}) => {
          setJogo(data.data);
        }).catch((error) => {
          console.log(error);
        })
    }, [jogo.id]);
  }

    const OnSubmit = (e) => {
      e.preventDefault();
      axiosClient.put(`/jogo/update/${id}`, jogo)
        .then((data) => {
          navigate('/jogo/index');
        }).catch((error) => {
          console.log(error);
        })
    }
    const OnCancel = () => {
      navigate('/jogo/index');
    }

  return (
    <Fragment>
      <div className='display'>
        <div className='card animated fadeInDown'>
          {jogo.id && <h1>Exclusão de Jogo: {jogo.nome}  </h1>}
        </div>

        <form onSubmit={(e)=>OnSubmit(e)}>

          <input
              type="text"
              value={jogo.nome}
              placeholder="Nome do Jogo"
              onChange={
                  e => setJogo({
                      ...jogo, nome: e.target.value
                  })
              }
          />
          <input
              type='date'
              value={jogo.dataLancamento}
              placeholder="Data de Lançamento"
              onChange={
                  e => setJogo({
                      ...jogo, dataLancamento: e.target.value
                  })
              }
          />
          <input
              type="text"
              value={jogo.descricao}
              placeholder="Descrição"
              onChange={
                  e => setJogo({
                      ...jogo, descricao: e.target.value
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
            to='/jogo/index'>
              Cancelar
          </Link>
        </form>
      </div>
    </Fragment>
  )
}

export default JogoFormUpdate