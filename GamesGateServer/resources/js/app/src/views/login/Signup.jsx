import { useState } from "react";
import { Link } from "react-router-dom";


export default function Signup() {

    const [message, setMessage] = useState(null);

    const getInputClass = (error) => {
        if (error) {
            return "form-control is-invalid";
        } else if (error === false) {
            return "form-control is-valid";
        }
        return "form-control";
    }

    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form>
                    <h1 className="title">Registre sua conta</h1>
                    {
                        message &&
                        <div className='alert'>
                            <p>{message}</p>
                        </div>
                    }
                    <input type="text" placeholder="Nome" />
                    <input type="text" placeholder="E-mail" />
                    <input type="text" placeholder="Apelido" />
                    <input type="date" placeholder="Data de Nascimento" />
                    <input type="text" placeholder="Descrição" />
                    <input type="password" placeholder="Senha" />
                    <input type="password" placeholder="Confirmar Senha" />
                    <button className='btn btn-block'>Salvar</button>
                    <p className='message'>Está registrado? <Link to="/login">Login</Link></p>
                </form>
            </div>
        </div>
    )
}