import React, { Fragment, useEffect, useState } from 'react'
import axiosClient from '../../axiosClient';
import { Link, useNavigate, useParams } from 'react-router-dom';

function JogoFormStore() {
    const navigate = useNavigate();

    const [jogo, setJogo] = useState({
        id: null,
        nome: '',
        dataLancamento: new Date().toISOString().split('T')[0],
        descricao: '',
    });

    // Função do tipo Anônima
    const onSubmit = (e) => {
        e.preventDefault();
        axiosClient.post(`/jogo/store`, jogo)
            .then(() => {
                setJogo({});
                console.log('Jogo incluído com sucesso');
                navigate('/jogo/index')
            }).catch((error) => {
                console.log(error);
            })
    }

    const onCancel = (e) => {
        navigate('/jogo/index');
    }



    return (
        <Fragment>
            <div className="display">
                <div className="card animated fadeinDown">
                    <h1>Inclusão de Jogo</h1>

                    <form onSubmit={(e) => onSubmit(e)}>
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
                        <br />
                        <br />
                        <button
                            className="btn btn-edit">
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
            </div>
        </Fragment>
    )
}

export default JogoFormStore