import { useState, Fragment, useEffect } from 'react'
import axiosClient from '../../axiosClient'
import { Link, useNavigate, useParams } from 'react-router-dom';

function DesenvolvedoraFormUpdate() {

  const navigate = useNavigate();
  const [desenvolvedora, setDesenvolvedora] = useState({
      id: null,
      nome: '',
      email: '',
      descricao: '',
      pais: '',
      site: '',
  });

  const { id } = useParams();
  
  if (id){
    useEffect(() => {
      axiosClient.get(`/desenvolvedora/show/${id}`)
        .then(({data}) => {
          setDesenvolvedora(data.data);
        }).catch((error) => {
          console.log(error);
        })
    }, [desenvolvedora.id]);
  }

    const OnSubmit = (e) => {
      e.preventDefault();
      axiosClient.put(`/desenvolvedora/update/${id}`, desenvolvedora)
        .then((data) => {
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
          {desenvolvedora.id && <h1>Atualização de Desenvolvedora: {desenvolvedora.nome}  </h1>}
        </div>

        <form onSubmit={(e)=>OnSubmit(e)}>

          <input
              type="text"
              value={desenvolvedora.nome}
              placeholder="Nome da Desenvolvedora"
              onChange={
                  e => setDesenvolvedora({
                      ...desenvolvedora, nome: e.target.value
                  })
              }
          />
          <input
              value={desenvolvedora.dataLancamento}
              placeholder="Email da Desenvolvedora"
              onChange={
                  e => setDesenvolvedora({
                      ...desenvolvedora, email: e.target.value
                  })
              }
          />
          <input
              type="text"
              value={desenvolvedora.descricao}
              placeholder="Descrição"
              onChange={
                  e => setDesenvolvedora({
                      ...desenvolvedora, descricao: e.target.value
                  })
              }
          />
          <input
              type="text"
              value={desenvolvedora.pais}
              placeholder="País"
              onChange={
                  e => setDesenvolvedora({
                      ...desenvolvedora, pais: e.target.value
                  })
              }
          />
          <input
              type="text"
              value={desenvolvedora.site}
              placeholder="Site"
              onChange={
                  e => setDesenvolvedora({
                      ...desenvolvedora, site: e.target.value
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
            to='/desenvolvedora/index'>
              Cancelar
          </Link>
        </form>
      </div>
    </Fragment>
  )
}

export default DesenvolvedoraFormUpdate