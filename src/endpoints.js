
import { corPrimaria, frequenciaCaractere, ingresso, maiorNumero } from './services.js';
import { Router } from 'express';

const server = Router();


server.get('/dia2/corprimaria/:cor', (req, resp) => {
    try{
        const {cor} = req.params;
        const primaria = corPrimaria(cor);
        resp.send({P
            primaria: primaria
        })
    } 
    catch (err){
        resp.send({
            erro:err.message
        })
    }   
}); 


server.post ('/dia2/ingresso', (req, resp) =>{
    try{
        const {qtd, qtdM, dia, nacionalidade} = req.body;
        const total = ingresso(qtd, qtdM, dia, nacionalidade);
        resp.send({
            total:total
        })
    }
    catch (err) {
        resp.send({
            erro: err.message
        })
    }
})



server.get('/dia2/freqcaractere/:texto/:caractere', (req, resp)=>{
    try {
        const {texto, caractere} = req.params;
        const freq = freqCaracter(texto, caractere);
        resp.send ({
            freq:freq
        })
    }
    catch (err) {
        resp.send({
            erro : err.message
        })
    }
})


server.post('/dia2/maiorNumero', (req, resp) => {
    try {
        const numeros = req.body;
        const maior = maiorNumero(numeros);
        resp.send({
            maior : maior
        })
    }
    catch (err) {
        resp.send({
            erro : err.message
        })
    }
})

export default server