import http from 'node:http';

const users = []

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  const buffers = []

  for await (const chunk of req) {
    buffers.push(chunk)
  }

  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch {
    req.body = null
  }

  if (method === 'GET' && url === '/users') {
    return res
    .setHeader('Content-type', 'applycation/json')
    .end(JSON.stringify(users))
  }

  if (method === 'POST' && url === '/users') {
    //desestruturação
    const { name, email } = req.body

    users.push({
      id: 1,
      name,
      email
    });

    return res.writeHead(201).end();
  }

  return res.writeHead(400).end( ) 
})

server.listen(3333)