const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebSocket } =  require('./utils/websocket');
const app = express();

const server = http.Server(app);

setupWebSocket(server);

mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb+srv://oministack:oministack@cluster0-nmz8z.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true    
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);



