import React, { Fragment, useEffect, useState } from 'react'
import axiosClient from '../../axiosClient';
import { Link, useNavigate, useParams } from 'react-router-dom';

function GeneroDoJogoFormStore() {
    const navigate = useNavigate();

    const [generoDoJogo, setGeneroDoJogo] = useState({
        id: null,
        genero_id: '',
        jogo_id:'',
    });

    // Função do tipo Anônima
    const onSubmit = (e) => {
        e.preventDefault();
        axiosClient.post(`/generodojogo/store`, generoDoJogo)
            .then(() => {
                setGeneroDoJogo({});
                console.log('Conexãoe entre Gênero e Jogo criada com sucesso!');
                navigate('/generodojogo/index')
            }).catch((error) => {
                console.log(error);
            })
    }

    const onCancel = (e) => {
        navigate('/generodojogo/index');
    }



    return (
        <Fragment>
            <div className="display">
                <div className="card animated fadeinDown">
                    <h1>Inclusão de Conexão entre Gênero e Jogo</h1>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <input
                            type="text"
                            value={generoDoJogo.genero_id}
                            placeholder="Gênero "
                            onChange={
                                e => setGeneroDoJogo({
                                    ...generoDoJogo, genero_id: e.target.value
                                })
                            }
                        />
                        <input
                            type="text"
                            value={generoDoJogo.jogo_id}
                            placeholder="Jogo "
                            onChange={
                                e => setGeneroDoJogo({
                                    ...generoDoJogo, jogo_id: e.target.value
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
                            to='/generodojogo/index'>
                            Cancelar
                        </Link>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default GeneroDoJogoFormStore