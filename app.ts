import * as http from 'http';

http.createServer((request, response)=>{
    response.end('Hello from Node.jhs TypeScript')
}).listen(3030);