import './index.scss'
import { useState } from 'react'


import{cadastrarVilao} from '../api/vilaoapi'

export default function Index() {
    const [nome, setNome] = useState('');
    const [maldades, setMaldades] = useState('');
    const [poder, setPoder] = useState(false);

    async function salvarClick(){
        try{
       
          const resp = await cadastrarVilao(nome,maldades,poder);
          alert('Vilao cadastrado com sucesso')
        }
        catch(err){
          if(err.response){
              alert(err.response.data.erro)
          }
          else{
              alert(err.message)
          }
        }
    } 
    return (
        <main className='page page-cadastrar'>
           
            <div className='container'>
              
                <div className='conteudo'>
                    <section>
                        <h1 className='titulo'><span>&nbsp;</span> Cadastrar Novo Vilão</h1>

                        <div className='form-colums'>
                            
                            <div>
                                <div className='form-row'>
                              <label className='nome'>Nome: </label>
                                    <input className='caixa-1' type='text' placeholder='Nome do Vilão' value={nome} onChange={a => setNome(a.target.value)}/>
                               
                                </div>
                              <br/>
                                <div className='form-row'>
                                    <label>Maldades: </label>
                                    <input className='caixa-2' type='text' placeholder='Maldades do Vilão' value={maldades} onChange={a => setMaldades(a.target.value)}/>
                                </div>
                        

                                <br />
                                <div className='form-row'>
                                    <input type='checkbox'checked={poder} onChange={a => setPoder(a.target.checked)}/> &nbsp; Tem Poder?
                                </div>
                            </div>
                            <div>
                                
                                <div className='form-row'>
                                    <label></label>
                                    <div className='btnSalvar'>
                                        <button className='salvar' onClick={salvarClick}>salvar</button>    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                      <div className="t">
                         <a href="./consultar" className="consultar">Consultar</a>
                     </div>
                </div>
            </div>
        </main>
    )
}