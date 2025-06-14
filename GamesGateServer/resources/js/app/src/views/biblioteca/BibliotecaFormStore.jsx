import React, { Fragment, useEffect, useState } from 'react'
import axiosClient from '../../axiosClient';
import { Link, useNavigate, useParams } from 'react-router-dom';

function BibliotecaFormStore() {
    const navigate = useNavigate();

    const [biblioteca, setBiblioteca] = useState({
        id: null,
        user_id: '',
        quantidadeJogos: ''
    });

    // Função do tipo Anônima
    const onSubmit = (e) => {
        e.preventDefault();
        axiosClient.post(`/biblioteca/store`, biblioteca)
            .then(() => {
                setBiblioteca({});
                console.log('Biblioteca incluída com sucesso');
                navigate('/biblioteca/index')
            }).catch((error) => {
                console.log(error);
            })
    }

    const onCancel = (e) => {
        navigate('/biblioteca/index');
    }



    return (
        <Fragment>
            <div className="display">
                <div className="card animated fadeinDown">
                    <h1>Inclusão de Biblioteca</h1>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <input
                            type="text"
                            value={biblioteca.user_id}
                            placeholder="ID do Usuário"
                            onChange={
                                e => setBiblioteca({
                                    ...biblioteca, user_id: e.target.value
                                })
                            }
                        />
                        <input
                            type="text"
                            value={biblioteca.user_id}
                            placeholder="Quantidade de Jogos"
                            onChange={
                                e => setBiblioteca({
                                    ...biblioteca, quantidadeJogos: e.target.value
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
                            to='/biblioteca/index'>
                            Cancelar
                        </Link>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default BibliotecaFormStore