import './index.scss'
import { useEffect, useState } from 'react';

import {ListarTodosVilao} from '../api/vilaoapi'


export default function Index(){
    const [vilao, setVilao] = useState([]);
 
    async function carregarTodosOsViloes(){
        const resp = await ListarTodosVilao();
        setVilao(resp);
    }

    useEffect(() =>{
        carregarTodosOsViloes();
    }, [])
    return (
        <main className='page page-consultar'>
          
            <div className='container'>
               
                
                <div className='conteudo'>
                <div className="t">
                         <a href="./cadastrar" className="voltar">voltar</a>
                     </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Identificaçao</th>
                                <th>Nome</th>
                                <th>Maldades</th>
                                <th>Poder</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            
                           
                           {vilao.map(item => 
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.maldades}</td>
                                <td>{item.poder ? 'Sim' : 'Nao'}</td>
    
                            </tr>
                           )}
                        </tbody>
                    </table>
                   
                </div>
            </div>
        </main>
    )
}