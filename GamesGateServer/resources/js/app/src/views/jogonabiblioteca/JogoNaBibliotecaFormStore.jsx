import React, { Fragment, useEffect, useState } from 'react'
import axiosClient from '../../axiosClient';
import { Link, useNavigate, useParams } from 'react-router-dom';

function JogoNaBibliotecaFormStore() {
    const navigate = useNavigate();

    const [jogonabiblioteca, setJogoNaBiblioteca] = useState({
        id: null,
        jogo_id:'',
        biblioteca_id:'',
    });

    // Função do tipo Anônima
    const onSubmit = (e) => {
        e.preventDefault();
        axiosClient.post(`/jogonabiblioteca/store`, jogonabiblioteca)
            .then(() => {
                setJogoNaBiblioteca({});
                console.log('Análise incluída com sucesso');
                navigate('/jogonabiblioteca/index')
            }).catch((error) => {
                console.log(error);
            })
    }

    const onCancel = (e) => {
        navigate('/jogonabiblioteca/index');
    }



    return (
        <Fragment>
            <div className="display">
                <div className="card animated fadeinDown">
                    <h1>Inclusão de Conexão entre Jogo e Biblioteca</h1>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <input
                            type="text"
                            value={jogonabiblioteca.biblioteca_id}
                            placeholder="Id da Biblioteca"
                            onChange={
                                e => setJogoNaBiblioteca({
                                    ...jogonabiblioteca, biblioteca_id: e.target.value
                                })
                            }
                        />
                        <input
                            type="text"
                            value={jogonabiblioteca.jogo_id}
                            placeholder="Id do Jogo"
                            onChange={
                                e => setJogoNaBiblioteca({
                                    ...jogonabiblioteca, jogo_id: e.target.value
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
                            to='/jogonabiblioteca/index'>
                            Cancelar
                        </Link>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default JogoNaBibliotecaFormStore