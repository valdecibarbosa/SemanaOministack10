const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/ParseStringAsArray');
const { findConnections, sendMessage } = require('../utils/websocket');

//index, show, store, update, destroy

module.exports = {
    
    async index (request, response) {
       const devs  = await Dev.find();
       return response.json(devs);    
    },
    
    async store(request, response) {
    
        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username });

        if (!dev) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
             
            // essa parada de pegar o login no lugar do nome não funciona
            const {name = login, avatar_url, bio} = apiResponse.data;
        
            const techsArray = parseStringAsArray(techs);
        
            const location = {
                type: "Point",
                coordinates: [longitude, latitude]
            }
        
            dev =  await Dev.create({
               github_username, //short sintax
               name,
               avatar_url,
               bio,
               techs: techsArray,
               location
            });

            //filtrar as conexões sockets que estao no moximo 10km de distancia
            //e o novo dev tenha pelo menos uma das tecnologias filtradas
             const sendSocketMessageTo = findConnections(
                {latitude, longitude}, techsArray
             );   

            sendMessage(sendSocketMessageTo, 'new-dev', dev);
        }
        
        //console.log(name, avatar_url, bio, github_username);
         return response.json(dev);
     }
};