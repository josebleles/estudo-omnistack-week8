const roteador = require('express').Router();

roteador.get('/', (rq, rs)=>{
    console.log(rq);
    return rs.send(`TESE:  ${rq.query.kkkkk}`);
});

module.exports = roteador;