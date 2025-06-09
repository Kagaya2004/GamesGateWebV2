import React, { useEffect, useState } from 'react'
import axiosClient from '../../axiosClient';
import { data, Link } from 'react-router-dom';

function AvaliacaoFormList() {

  const [avaliacaos, setAvaliacoes] = React.useState([]);
  //const {page, pageSize} = avaliacaoParams();

  const getAvaliacoes = () => {
    axiosClient.get(`/avaliacao/index?page{}`)
              .then(({data}) => {
                setAvaliacoes(data.data);
              }
              ).catch((error) => {
                console.log(error);
              })
  }

  useEffect(() => {
    getAvaliacoes();
  }, []);


  return (
    <div className='display'>
      <div className='card animated fadeInDown'>
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center', 
        }}>

          <h1>Lista de Avaliações</h1>
          <Link to="/avaliacao/store" className='btn-add'>Store</Link>
        </div>
        <table>
          
          <thead>
            <tr>
              <th>ID</th>
              <th>Descrição</th>
              <th>ID da Análise</th>
              <th className='center actions' colSpan={3}>Ações</th>
            </tr>
          </thead>

          <tbody>
            {
              avaliacaos.length > 0 ? (
                avaliacaos.map((avaliacao, index) => (
                  <tr key={index}>

                    <td>{avaliacao.id}</td>

                    <td>{avaliacao.descricao}</td>

                    <td>{avaliacao.analise_id}</td>
                    
                    <td className='center actions'>
                      <Link to={`/avaliacao/update/${avaliacao.id}`} className='btn-edit'>Update</Link>
                    </td>

                    <td className='center actions'>
                      <Link to={`/avaliacao/destroy/${avaliacao.id}`} className='btn-delete'>Destroy</Link>
                    </td>
                  
                    <td className='center actions'>
                      <Link to={`/avaliacao/show/${avaliacao.id}`} className='btn-show'>Show</Link>
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

export default AvaliacaoFormList