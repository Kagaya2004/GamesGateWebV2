import React, { useEffect, useState } from 'react'
import axiosClient from '../../axiosClient';
import { data, Link } from 'react-router-dom';

function GeneroDoJogoFormList() {

  const [generoDoJogos, setGeneroDoJogos] = React.useState([]);
  //const {page, pageSize} = generoDoJogoParams();

  const getGeneroDoJogos = () => {
    axiosClient.get(`/generodojogo/index?page{}`)
              .then(({data}) => {
                setGeneroDoJogos(data.data);
              }
              ).catch((error) => {
                console.log(error);
              })
  }

  useEffect(() => {
    getGeneroDoJogos();
  }, []);


  return (
    <div className='display'>
      <div className='card animated fadeInDown'>
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center', 
        }}>

          <h1>Lista de GeneroDoJogos</h1>
          <Link to="/generodojogo/store" className='btn-add'>Store</Link>
        </div>
        <table>
          
          <thead>
            <tr>
              <th>ID</th>
              <th>Gênero</th>
              <th>Jogo</th>
              <th className='center actions' colSpan={3}>Ações</th>
            </tr>
          </thead>

          <tbody>
            {
              generoDoJogos.length > 0 ? (
                generoDoJogos.map((generoDoJogo, index) => (
                  <tr key={index}>

                    <td>{generoDoJogo.id}</td>

                    <td>{generoDoJogo.genero_id}</td>

                    <td>{generoDoJogo.jogo_id}</td>
                    
                    <td className='center actions'>
                      <Link to={`/generodojogo/update/${generoDoJogo.id}`} className='btn-edit'>Update</Link>
                    </td>

                    <td className='center actions'>
                      <Link to={`/generodojogo/destroy/${generoDoJogo.id}`} className='btn-delete'>Destroy</Link>
                    </td>
                  
                    <td className='center actions'>
                      <Link to={`/generodojogo/show/${generoDoJogo.id}`} className='btn-show'>Show</Link>
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

export default GeneroDoJogoFormList