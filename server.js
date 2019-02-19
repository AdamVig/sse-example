const express = require('express')

const sendEvent = (res, data) => res.write(`data: ${data.toString()}\n\n`)

function handler (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/event-stream' })

  sendEvent(res, 'foo')
  const interval = setInterval(() => sendEvent(res, Math.random() * 100), 1000)

  req.on('close', () => {
    clearInterval(interval)
    res.end()
  })
}

const app = express()
app.disable('x-powered-by')
app.use(express.static('public'))
app.get('/sse', handler)
app.listen(8080)
