//import http from 'http';
import 'dotenv/config';
import app from './src/app.js';

const PORT = 3000;

/* const rotas = {
    "/": "Curso de Node.js",
    "/livros": "Entrei na rota livros",
    "/autores": "Entrei na rota autores"
} */

/* const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plan"});
    res.end(rotas[req.url]);
    console.log(`requisicao:::::${req.url}`)
}); */

app.listen(PORT, () => {
    console.log("servidor escutando!");
});