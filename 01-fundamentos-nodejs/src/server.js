import http from 'node:http'

/**
 *  - HTTP
 *    - Método HTTP
 *    - URL
 */

// GET, POST, PUT, DELETE

//methods
// GET => Busca uma recurso do back
// POST => Criar um novo recirso no back
// PUT => Atualiza um recurso no back
// PATCH => Atualiza uma informação específica de um recurso no back
// DELETE => Deletar um recurso do back

// methods + url
// GET /users => Buscando usuário do back
// POST /users => Cria um usuário no back

const server = http.createServer((req, res) => {
  const { method, url } = req

  if (method === 'GET' && url === '/users') {
    return res.end('Listagem de usuários')
  }

  if (method === 'POST' && url === '/users') {
    return res.end('Criação de usuário')
  }

  return res.end('Hello Maycon')
})

server.listen(3333)