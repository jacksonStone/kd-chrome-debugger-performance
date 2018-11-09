
const express = require('express')
const app = express()
const routes = require('./server/routes')
const path = require('path')


app.get('/', (_, res) => res.sendFile(path.join(__dirname, './client', 'index.html')))
app.get('/favicon.ico', (_, res) => res.sendFile(path.join(__dirname, './favicon.ico')))
app.use('/api', routes.api)
app.use(express.static('client', {etag: false, lastModified: false }))
app.listen(3000, () => console.log('Example app listening on port 3000!'))