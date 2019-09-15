const express = require("express");
const bodyParser = require('body-parser');
const path = require("path")
const cors = require('cors')
const logger = require('morgan')
const helmet = require('helmet')

const app = express();
app.use(cors())
app.use(helmet())
app.use(logger('tiny'))
app.use(bodyParser.json())

const youtube = require('./routes/youtube')
app.use('/api/youtube', youtube)

const translate = require('./routes/translate')
app.use("/api/translate", translate)

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 8080;
app.listen(PORT);
