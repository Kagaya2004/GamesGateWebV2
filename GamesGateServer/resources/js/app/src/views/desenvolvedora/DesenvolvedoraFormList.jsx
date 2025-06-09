import React, { useEffect, useState } from 'react'
import axiosClient from '../../axiosClient';
import { data, Link } from 'react-router-dom';

function DesenvolvedoraFormList() {

  const [desenvolvedoras, setDesenvolvedoras] = React.useState([]);
  //const {page, pageSize} = desenvolvedoraParams();

  const getDesenvolvedoras = () => {
    axiosClient.get(`/desenvolvedora/index?page{}`)
              .then(({data}) => {
                setDesenvolvedoras(data.data);
              }
              ).catch((error) => {
                console.log(error);
              })
  }

  useEffect(() => {
    getDesenvolvedoras();
  }, []);


  return (
    <div className='display'>
      <div className='card animated fadeInDown'>
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center', 
        }}>

          <h1>Lista de Desenvolvedoras</h1>
          <Link to="/desenvolvedora/store" className='btn-add'>Store</Link>
        </div>
        <table>
          
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Descrição</th>
              <th>País</th>
              <th>Site</th>
              <th className='center actions' colSpan={3}>Ações</th>
            </tr>
          </thead>

          <tbody>
            {
              desenvolvedoras.length > 0 ? (
                desenvolvedoras.map((desenvolvedora, index) => (
                  <tr key={index}>

                    <td>{desenvolvedora.id}</td>

                    <td>{desenvolvedora.nome}</td>

                    <td>{desenvolvedora.email}</td>

                    <td>{desenvolvedora.descricao}</td>

                    <td>{desenvolvedora.pais}</td>

                    <td>{desenvolvedora.site}</td>

                    <td className='center actions'>
                      <Link to={`/desenvolvedora/update/${desenvolvedora.id}`} className='btn-edit'>Update</Link>
                    </td>

                    <td className='center actions'>
                      <Link to={`/desenvolvedora/destroy/${desenvolvedora.id}`} className='btn-delete'>Destroy</Link>
                    </td>
                  
                    <td className='center actions'>
                      <Link to={`/desenvolvedora/show/${desenvolvedora.id}`} className='btn-show'>Show</Link>
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

export default DesenvolvedoraFormList