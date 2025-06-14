import useValidator from "../hook/useValidator";
import { ERROR_USER, USER } from "../types/User";

const NUMBER = '0123456789';
const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVXWYZ';
const LOWERCASE = 'abcedefghijklmnopqrstuvxwyz';
const SPECIALCHARACTER  = "!'^%#()=?@";
const SENHA_TAMANHO = 8;

const userValidationRules  =  {
    nome:(nome)=>{
        let mensagens = [];
        if (!nome || nome.trim().length === 0 ) {
           mensagens.push('Obrigatório informar o nome do usuário');
        }
        return mensagens;
    },

    email:(email)=>{
        let mensagens = [];
        if (!email || email.trim().length === 0 ) {
           mensagens.push('Obrigatório informar um e-mail');
        }
        else {
        // Expressão regular simples para validar e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            mensagens.push('E-mail inválido');
        }
    }
        return mensagens;
    },

    senha:(senha)=>{
        let mensagens = [];

        if (!senha || senha.trim().length === 0 ) {
            mensagens.push('Obrigatório informar a senha');
        }

        if ( senha.length < SENHA_TAMANHO ){
            mensagens.push('A senha deve conter oito caracteres ')
        }

        const hasNumber = [...senha].some((char) => NUMBER.includes(char));

        if (!hasNumber){
        mensagens.push('A senha deve conter pelo menos um número');
        }

        /* const hasLowerCase = [...senha].some((char) => LOWERCASE.includes(char));

        if (!hasLowerCase){
            mensagens.push('A senha deve conter pelo menos um caracter minúsculo');
        }

        const hasUpperCase = [...senha].some((char) => UPPERCASE.includes(char));

        if (!hasUpperCase){
            mensagens.push('A senha deve conter pelo menos um caracter maíuscula');
        } */

        return mensagens;
    },
}


export const useValidarDadosUser = () => {
    return useValidator(USER, ERROR_USER, userValidationRules);
}

