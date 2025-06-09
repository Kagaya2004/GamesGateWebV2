import React, { Fragment, useEffect, useState } from 'react'
import axiosClient from '../../axiosClient';
import { Link, useNavigate, useParams } from 'react-router-dom';

function DesenvolvedoraFormStore() {
    const navigate = useNavigate();

    const [desenvolvedora, setDesenvolvedora] = useState({
        id: null,
        nome: '',
        email: '',
        descricao: '',
        pais: '',
        site: '',
    });

    // Função do tipo Anônima
    const onSubmit = (e) => {
        e.preventDefault();
        axiosClient.post(`/desenvolvedora/store`, desenvolvedora)
            .then(() => {
                setDesenvolvedora({});
                console.log('Desenvolvedora incluída com sucesso');
                navigate('/desenvolvedora/index')
            }).catch((error) => {
                console.log(error);
            })
    }

    const onCancel = (e) => {
        navigate('/desenvolvedora/index');
    }



    return (
        <Fragment>
            <div className="display">
                <div className="card animated fadeinDown">
                    <h1>Inclusão de Desenvolvedora</h1>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <input
                            type="text"
                            value={desenvolvedora.nome}
                            placeholder="Nome do Desenvolvedora"
                            onChange={
                                e => setDesenvolvedora({
                                    ...desenvolvedora, nome: e.target.value
                                })
                            }
                        />
                        <input
                            value={desenvolvedora.email}
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
                        <br />
                        <br />
                        <button
                            className="btn btn-edit">
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
            </div>
        </Fragment>
    )
}

export default DesenvolvedoraFormStore