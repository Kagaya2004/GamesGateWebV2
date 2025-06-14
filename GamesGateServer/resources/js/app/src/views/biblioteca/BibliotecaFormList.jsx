import React, { useEffect, useState } from 'react'
import axiosClient from '../../axiosClient';
import { data, Link } from 'react-router-dom';

function BibliotecaFormList() {

  const [bibliotecas, setBibliotecas] = React.useState([]);
  //const {page, pageSize} = bibliotecaParams();

  const getBibliotecas = () => {
    axiosClient.get(`/biblioteca/index?page{}`)
              .then(({data}) => {
                setBibliotecas(data.data);
              }
              ).catch((error) => {
                console.log(error);
              })
  }

  useEffect(() => {
    getBibliotecas();
  }, []);


  return (
    <div className='display'>
      <div className='card animated fadeInDown'>
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center', 
        }}>

          <h1>Lista de Bibliotecas</h1>
          <Link to="/biblioteca/store" className='btn-add'>Store</Link>
        </div>
        <table>
          
          <thead>
            <tr>
              <th>ID</th>
              <th>ID do Usuário</th>
              <th>Quantidade de Jogos</th>
              <th className='center actions' colSpan={3}>Ações</th>
            </tr>
          </thead>

          <tbody>
            {
              bibliotecas.length > 0 ? (
                bibliotecas.map((biblioteca, index) => (
                  <tr key={index}>

                    <td>{biblioteca.id}</td>

                    <td>{biblioteca.user_id}</td>

                    <td>{biblioteca.quantidadeJogos}</td>

                    <td className='center actions'>
                      <Link to={`/biblioteca/update/${biblioteca.id}`} className='btn-edit'>Update</Link>
                    </td>

                    <td className='center actions'>
                      <Link to={`/biblioteca/destroy/${biblioteca.id}`} className='btn-delete'>Destroy</Link>
                    </td>
                  
                    <td className='center actions'>
                      <Link to={`/biblioteca/show/${biblioteca.id}`} className='btn-show'>Show</Link>
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

export default BibliotecaFormList