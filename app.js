const express = require('express')
const slugify = require('slugify')
const products_routes = require('./routes/products.js')

//Server instantiation
const app = express()
const PORT = process.env.PORT || 3030;   

//Server configuration: template engine
app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('/views'));

//Midleware
app.use(express.json())
app.use('/', products_routes)

//Server startup
// app.listen(5000, () => {
//     console.log('server is listening on port 5000')
// })
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });

const mensajeBienvenida = '¡Bienvenido al servidor Express!';
const mensajeSlug = slugify(mensajeBienvenida, { replacement: '*', lower: true });

console.log(mensajeSlug); // salida: bienvenido-al-servidor-express! 