import React, { useEffect, useState } from 'react'
import axiosClient from '../../axiosClient';
import { data, Link } from 'react-router-dom';

function JogoFormList() {

  const [jogos, setJogos] = React.useState([]);
  //const {page, pageSize} = jogoParams();

  const getJogos = () => {
    axiosClient.get(`/jogo/index?page{}`)
              .then(({data}) => {
                setJogos(data.data);
              }
              ).catch((error) => {
                console.log(error);
              })
  }

  useEffect(() => {
    getJogos();
  }, []);


  return (
    <div className='display'>
      <div className='card animated fadeInDown'>
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center', 
        }}>

          <h1>Lista de Jogos</h1>
          <Link to="/jogo/store" className='btn-add'>Store</Link>
        </div>
        <table>
          
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Data de Lançamento</th>
              <th>Descrição</th>
              <th className='center actions' colSpan={3}>Ações</th>
            </tr>
          </thead>

          <tbody>
            {
              jogos.length > 0 ? (
                jogos.map((jogo, index) => (
                  <tr key={index}>

                    <td>{jogo.id}</td>

                    <td>{jogo.nome}</td>

                    <td>{jogo.dataLancamento}</td>

                    <td>{jogo.descricao}</td>

                    <td className='center actions'>
                      <Link to={`/jogo/update/${jogo.id}`} className='btn-edit'>Update</Link>
                    </td>

                    <td className='center actions'>
                      <Link to={`/jogo/destroy/${jogo.id}`} className='btn-delete'>Destroy</Link>
                    </td>
                  
                    <td className='center actions'>
                      <Link to={`/jogo/show/${jogo.id}`} className='btn-show'>Show</Link>
                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td>Nenhum Registro encontrado</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default JogoFormList