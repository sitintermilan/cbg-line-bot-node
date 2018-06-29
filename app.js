const express = require('express');
const app = express();
const config = require('./config')
const routes = require('./routes.js')
const port = config.server.port;


app.use('/',routes)

app.listen(process.env.PORT || port,() =>{
	console.log('server start on port 3000')
})