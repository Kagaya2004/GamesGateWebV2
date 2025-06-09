import React, { Fragment, useEffect, useState } from 'react'
import axiosClient from '../../axiosClient';
import { Link, useNavigate, useParams } from 'react-router-dom';

function GeneroFormStore() {
    const navigate = useNavigate();

    const [genero, setGenero] = useState({
        id: null,
        nome: '',
        descricao: '',
    });

    // Função do tipo Anônima
    const onSubmit = (e) => {
        e.preventDefault();
        axiosClient.post(`/genero/store`, genero)
            .then(() => {
                setGenero({});
                console.log('Gênero incluída com sucesso');
                navigate('/genero/index')
            }).catch((error) => {
                console.log(error);
            })
    }

    const onCancel = (e) => {
        navigate('/genero/index');
    }



    return (
        <Fragment>
            <div className="display">
                <div className="card animated fadeinDown">
                    <h1>Inclusão de Gênero</h1>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <input
                            type="text"
                            value={genero.nome}
                            placeholder="Nome do Gênero"
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
                        <br />
                        <br />
                        <button
                            className="btn btn-edit">
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
            </div>
        </Fragment>
    )
}

export default GeneroFormStore