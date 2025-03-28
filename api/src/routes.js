const express = require('express');
const routes = express.Router();


const Aluno = require('./controllers/controlleraluno');
const Telefone = require('./controllers/controllertelefone');
const Atividade = require('./controllers/controllerativ');

routes.get('/', (req, res) => {
  return res.json({ titulo: 'Escola ACME' });
});

routes.post('/aluno', Aluno.create);
routes.get('/aluno', Aluno.read);
routes.get('/aluno/:ra', Aluno.readOne);
routes.put('/aluno/:ra', Aluno.update);
routes.delete('/aluno/:ra', Aluno.remove);

routes.post('/atividade', Atividade.create);
routes.get('/atividade', Atividade.read);
routes.put('/atividade/:id', Atividade.update);
routes.delete('/atividade/:id', Atividade.remove);

routes.post('/telefone', Telefone.create);
routes.get('/telefone', Telefone.read);
routes.put('/telefone/:id', Telefone.update);
routes.delete('/telefone/:id', Telefone.remove);

module.exports = routes;



