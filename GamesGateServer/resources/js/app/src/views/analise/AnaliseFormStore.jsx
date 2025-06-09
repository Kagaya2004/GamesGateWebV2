import React, { Fragment, useEffect, useState } from 'react'
import axiosClient from '../../axiosClient';
import { Link, useNavigate, useParams } from 'react-router-dom';

function AnaliseFormStore() {
    const navigate = useNavigate();

    const [analise, setAnalise] = useState({
        id: null,
        titulo: '',
        curtidas:'',
        user_id:'',
        jogo_id:'',
    });

    // Função do tipo Anônima
    const onSubmit = (e) => {
        e.preventDefault();
        axiosClient.post(`/analise/store`, analise)
            .then(() => {
                setAnalise({});
                console.log('Análise incluída com sucesso');
                navigate('/analise/index')
            }).catch((error) => {
                console.log(error);
            })
    }

    const onCancel = (e) => {
        navigate('/analise/index');
    }



    return (
        <Fragment>
            <div className="display">
                <div className="card animated fadeinDown">
                    <h1>Inclusão de Análise</h1>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <input
                            type="text"
                            value={analise.titulo}
                            placeholder="Título da Análise "
                            onChange={
                                e => setAnalise({
                                    ...analise, titulo: e.target.value
                                })
                            }
                        />
                        <input
                            type="text"
                            value={analise.curtidas}
                            placeholder="Número de Curidas da Análise "
                            onChange={
                                e => setAnalise({
                                    ...analise, curtidas: e.target.value
                                })
                            }
                        />
                        <input
                            type="text"
                            value={analise.user_id}
                            placeholder="ID do Usuário da Análise "
                            onChange={
                                e => setAnalise({
                                    ...analise, user_id: e.target.value
                                })
                            }
                        />
                        <input
                            type="text"
                            value={analise.jogo}
                            placeholder="ID do Jogo da Análise "
                            onChange={
                                e => setAnalise({
                                    ...analise, jogo_id: e.target.value
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
                            to='/analise/index'>
                            Cancelar
                        </Link>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default AnaliseFormStore