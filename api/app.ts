import * as restify from 'restify';

import { IProduct, products } from './products';

import * as corsMiddleware from 'restify-cors-middleware';

const server: restify.Server = restify.createServer();
const port: number = 3031;

const options: corsMiddleware.Options = {
    origins: ['*'],
    allowHeaders: [],
    exposeHeaders: []
}

const cors : corsMiddleware.CorsMiddleware = corsMiddleware(options);

server.use(restify.plugins.bodyParser());
server.use(cors.preflight);
server.use(cors.actual);

server.get('/api/products', (request: restify.Request, response: restify.Response) => {
    console.log(products)
    response.json(products);
})

server.get('/api/products/:id',(request: restify.Request, response: restify.Response)=>{
    const id = Number(request.params.id);
    const product = products.filter(product => product.id === id);
    response.json(product)
})

server.post('/api/products',(request:restify.Request, response: restify.Response) => {
    const newProduct: IProduct = request.body;
    products.push(newProduct);
    response.json(products);
})

// server.put();
// server.del();

server.listen(port,()=> console.log(`REST API is running on port ${port}`))