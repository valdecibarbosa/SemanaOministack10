
//Métodos Http: GET, POST, PUT, DELETE

//TIPOS DE PARAMETROS:
//Query params: req.query (Filtros, ordenação, paginação, etc ..)
//Route Params: req.params (/:id) (identificador de recurso)
//Body: req.body (Dados complexos fornecios através de objetos)

const { Router } = require ('express');
const routes = Router();
const DevControler = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

routes.get('/devs', DevControler.index);
routes.post('/devs', DevControler.store);

routes.get('/search', SearchController.index);

 module.exports = routes;

