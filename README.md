# SemanaOministack10
Aplicação para cadastrar e localizar de desenvolvedores por geolocalização e suas skills de tecnologias.

# Como iniciar backend:
 - Instalar dependências (./backend yarn install)
- Configure a conexão com o mongo Atlas no arquivo src/index.js
- Rode o comando: yarn dev

# Backend Dependencies
- express - Gerenciamento de rotas e backend
- nodemon - Auto restart do server (dev dependency)
- mongoose - Conexão com o banco de dado mongoDB Atlas
- axios - Requisição ajax em APIs

# Utilizando as rotas
POST - Cadastrar Dev: http://localhost:3333/devs
Json (body): github_username, techs, latitude, longitude

GET - Listar Devs: http://localhost:3333/devs

GET - Buscar Devs: http://localhost:3333/devs
Query (no-body): latitude, longitude, techs

PUT - Alterar Dev: http://localhost:3333/devs/"github_username"
Json (body): Opcionais - techs, name, bio, avatar_url, latitude e longitude

DELETE - Deletar Dev: http://localhost:3333/devs/"github_username"

# Como iniciar frontend:
- Instalar dependências (./web yarn install)
- Rode o comando: yarn start

# Frontend
- Utilizando React
- Css padrão

# Como iniciar mobile:
- Instalar dependências (./mobile yarn install)
- Rode o comando: yarn start
- instalar o app do expo instalado em seu smartphone
- Scan do QR code
 
# Mobile
- Utilização de Expo
- React Native
- React navigation
- React-native-gesture-handler
- React-native-reanumated
- React-native-screens
- React-native-safe-area-context
- React-navigation-stack
- React-native-community/masked-view
- React-native-maps
- Expo-location
- React-native-webview
- Axios
- Socket.io

