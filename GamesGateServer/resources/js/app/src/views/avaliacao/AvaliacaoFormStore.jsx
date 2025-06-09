import React, { Fragment, useEffect, useState } from 'react'
import axiosClient from '../../axiosClient';
import { Link, useNavigate, useParams } from 'react-router-dom';

function AvaliacaoFormStore() {
    const navigate = useNavigate();

    const [avaliacao, setAvaliacao] = useState({
        id: null,
        descricao: '',
        avaliacao_id:'',
    });

    // Função do tipo Anônima
    const onSubmit = (e) => {
        e.preventDefault();
        axiosClient.post(`/avaliacao/store`, avaliacao)
            .then(() => {
                setAvaliacao({});
                console.log('Avaliação incluída com sucesso');
                navigate('/avaliacao/index')
            }).catch((error) => {
                console.log(error);
            })
    }

    const onCancel = (e) => {
        navigate('/avaliacao/index');
    }



    return (
        <Fragment>
            <div className="display">
                <div className="card animated fadeinDown">
                    <h1>Inclusão de Avaliação</h1>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <input
                            type="text"
                            value={avaliacao.descricao}
                            placeholder="Descrição da Avaliação "
                            onChange={
                                e => setAvaliacao({
                                    ...avaliacao, descricao: e.target.value
                                })
                            }
                        />
                        <input
                            type="text"
                            value={avaliacao.user_id}
                            placeholder="ID da Análise da Avaliação "
                            onChange={
                                e => setAvaliacao({
                                    ...avaliacao, user_id: e.target.value
                                })
                            }
                        />
                        <br />
                        <br />
                        <button
                            className="btn btn-edit">
                            Salvar
                        </button>
                        <Link
                            type='button'
                            className='btn btn-cancel'
                            to='/avaliacao/index'>
                            Cancelar
                        </Link>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default AvaliacaoFormStore