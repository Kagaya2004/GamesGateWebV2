import React, { useEffect, useState } from 'react'
import axiosClient from '../../axiosClient';
import { data, Link } from 'react-router-dom';

function GeneroFormList() {

  const [generos, setGeneros] = React.useState([]);
  //const {page, pageSize} = generoParams();

  const getGeneros = () => {
    axiosClient.get(`/genero/index?page{}`)
              .then(({data}) => {
                setGeneros(data.data);
              }
              ).catch((error) => {
                console.log(error);
              })
  }

  useEffect(() => {
    getGeneros();
  }, []);


  return (
    <div className='display'>
      <div className='card animated fadeInDown'>
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center', 
        }}>

          <h1>Lista de Gêneros</h1>
          <Link to="/genero/store" className='btn-add'>Store</Link>
        </div>
        <table>
          
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Descrição</th>
              <th className='center actions' colSpan={3}>Ações</th>
            </tr>
          </thead>

          <tbody>
            {
              generos.length > 0 ? (
                generos.map((genero, index) => (
                  <tr key={index}>

                    <td>{genero.id}</td>

                    <td>{genero.nome}</td>

                    <td>{genero.descricao}</td>

                    <td className='center actions'>
                      <Link to={`/genero/update/${genero.id}`} className='btn-edit'>Update</Link>
                    </td>

                    <td className='center actions'>
                      <Link to={`/genero/destroy/${genero.id}`} className='btn-delete'>Destroy</Link>
                    </td>
                  
                    <td className='center actions'>
                      <Link to={`/genero/show/${genero.id}`} className='btn-show'>Show</Link>
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

export default GeneroFormList