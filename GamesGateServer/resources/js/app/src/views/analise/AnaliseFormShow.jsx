import React, { useEffect, useState } from 'react'
import axiosClient from '../../axiosClient';
import { data, Link } from 'react-router-dom';

function AnaliseFormList() {

  const [analises, setAnalises] = React.useState([]);
  //const {page, pageSize} = analiseParams();

  const getAnalises = () => {
    axiosClient.get(`/analise/index?page{}`)
              .then(({data}) => {
                setAnalises(data.data);
              }
              ).catch((error) => {
                console.log(error);
              })
  }

  useEffect(() => {
    getAnalises();
  }, []);


  return (
    <div className='display'>
      <div className='card animated fadeInDown'>
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center', 
        }}>

          <h1>Lista de Análises</h1>
          <Link to="/analise/store" className='btn-add'>Store</Link>
        </div>
        <table>
          
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Curtidas</th>
              <th>ID do Usuário</th>
              <th>ID do Jogo</th>
              <th className='center actions' colSpan={3}>Ações</th>
            </tr>
          </thead>

          <tbody>
            {
              analises.length > 0 ? (
                analises.map((analise, index) => (
                  <tr key={index}>

                    <td>{analise.id}</td>

                    <td>{analise.titulo}</td>

                    <td>{analise.curtidas}</td>

                    <td>{analise.user_id}</td>

                    <td>{analise.jogo_id}</td>
                    
                    <td className='center actions'>
                      <Link to={`/analise/update/${analise.id}`} className='btn-edit'>Update</Link>
                    </td>

                    <td className='center actions'>
                      <Link to={`/analise/destroy/${analise.id}`} className='btn-delete'>Destroy</Link>
                    </td>
                  
                    <td className='center actions'>
                      <Link to={`/analise/show/${analise.id}`} className='btn-show'>Show</Link>
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

export default AnaliseFormList