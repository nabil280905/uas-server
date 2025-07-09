import jsonServer from 'json-server'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

const PORT = process.env.PORT || 3000

server.use(middlewares)
server.use(router)

server.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ JSON Server running at http://localhost:${PORT}`)
})
