import {Router} from 'express'

import {adcionarVilao, ListarTodosVilao} from '../repository/vilaoRepository.js'

const server = Router();

server.post ('/vilao', async (req,resp) => {
    try 
    {
        const novoVilao = req.body;
        const inserirVilao = await adcionarVilao(novoVilao);
        
        resp.send(inserirVilao)
    
    } catch (err) {
        resp.send(400).send({
            erro:err.message
        })
        
    }
})


server.get('/vilao', async (req,resp) => {
    try {
        const resposta = await ListarTodosVilao();
        resp.send(resposta);
    } catch (error) {
        resp.status(400).send({
            erro:message
        })
    }
})

export default server;

