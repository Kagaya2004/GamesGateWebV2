import React, { useEffect, useState } from 'react'
import axiosClient from '../../axiosClient';
import { data, Link } from 'react-router-dom';

function JogoNaBibliotecaFormList() {

  const [jogonabibliotecas, setJogoNaBibliotecas] = React.useState([]);
  //const {page, pageSize} = jogonabibliotecaParams();

  const getJogoNaBibliotecas = () => {
    axiosClient.get(`/jogonabiblioteca/index?page{}`)
              .then(({data}) => {
                setJogoNaBibliotecas(data.data);
              }
              ).catch((error) => {
                console.log(error);
              })
  }

  useEffect(() => {
    getJogoNaBibliotecas();
  }, []);


  return (
    <div className='display'>
      <div className='card animated fadeInDown'>
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center', 
        }}>

          <h1>Lista de JogoNaBibliotecas</h1>
          <Link to="/jogonabiblioteca/store" className='btn-add'>Store</Link>
        </div>
        <table>
          
          <thead>
            <tr>
              <th>ID</th>
              <th>ID do Jogo</th>
              <th>ID da Biblioteca</th>
              <th className='center actions' colSpan={3}>Ações</th>
            </tr>
          </thead>

          <tbody>
            {
              jogonabibliotecas.length > 0 ? (
                jogonabibliotecas.map((jogonabiblioteca, index) => (
                  <tr key={index}>

                    <td>{jogonabiblioteca.id}</td>

                    <td>{jogonabiblioteca.jogo_id}</td>

                    <td>{jogonabiblioteca.biblioteca_id}</td>
                    
                    <td className='center actions'>
                      <Link to={`/jogonabiblioteca/update/${jogonabiblioteca.id}`} className='btn-edit'>Update</Link>
                    </td>

                    <td className='center actions'>
                      <Link to={`/jogonabiblioteca/destroy/${jogonabiblioteca.id}`} className='btn-delete'>Destroy</Link>
                    </td>
                  
                    <td className='center actions'>
                      <Link to={`/jogonabiblioteca/show/${jogonabiblioteca.id}`} className='btn-show'>Show</Link>
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

export default JogoNaBibliotecaFormList