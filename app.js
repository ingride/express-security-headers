const express = require('express')
const helmet = require('helmet')

const app = express()
const port = 3000

app.use(helmet())
app.use(helmet.hsts({maxAge: 320000000, includeSubDomains: true}))

app.get('/', (req, res) => {
  res.send('<h2> Oh hai there! </h2>')
})

app.listen(port, () => {
  console.log(`🚀 at http://localhost:${port}`)
})
