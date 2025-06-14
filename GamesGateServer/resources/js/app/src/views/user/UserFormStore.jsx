import React, { Fragment, useState } from 'react'
import axiosClient from '../../axiosClient';
import { Link, useNavigate } from 'react-router-dom';

function UserFormStore() {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        id: null,
        nome: '',
        apelido: '',
        dataNascimento: new Date().toISOString().split('T')[0],
        email: '',
        senha: '',
        descricao: '',
        status: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        axiosClient.post(`/user/store`, user)
            .then(() => {
                setUser({});
                navigate('/user/index')
            }).catch((error) => {
                console.log(error);
            })
    }

    return (
        <Fragment>
            <form className="form-store" onSubmit={onSubmit}>
                <div className="form-title">Inclusão de Usuário</div>

                <label>Nome Completo</label>
                <input
                    type="text"
                    name="nome"
                    placeholder="Nome"
                    className={getInputClass(error.nome)}
                    value={model.nome}
                    onChange={handleChangeField}
                    onBlur={handleBlurField}
                />

                <label>Apelido do Usuário</label>
                <input
                    type="text"
                    name="apelido"
                    placeholder="Apelido"
                    className={getInputClass(error.apelido)}
                    value={model.apelido}
                    onChange={handleChangeField}
                    onBlur={handleBlurField}
                />

                <label>Data de Nascimento</label>
                <input
                    type="date"
                    name="dataNascimento"
                    placeholder="Data de Nascimento"
                    className={getInputClass(error.dataNascimento)}
                    value={model.dataNascimento}
                    onChange={handleChangeField}
                    onBlur={handleBlurField}
                />

                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={getInputClass(error.email)}
                    value={model.email}
                    onChange={handleChangeField}
                    onBlur={handleBlurField}
                />

                <label>Senha</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Senha"
                    className={getInputClass(error.senha)}
                    value={model.senha}
                    onChange={e => setUser({ ...user, senha: e.target.value })}
                    required
                />

                <label>Descrição</label>
                <textarea
                    value={model.descricao}
                    onChange={e => setUser({ ...user, descricao: e.target.value })}
                    rows={2}
                />

                <label>Status</label>
                <select
                    value={model.status}
                    onChange={e => setUser({ ...user, status: e.target.value })}
                    required
                >
                    <option value="">Selecione...</option>
                    <option value="ativo">Ativo</option>
                    <option value="inativo">Inativo</option>
                </select>

                <div className="form-store-actions">
                    <button className="btn-save" type="submit">Salvar</button>
                    <Link className="btn-cancel" to="/user/index">Cancelar</Link>
                </div>
            </form>
        </Fragment>
    )
}

export default UserFormStore