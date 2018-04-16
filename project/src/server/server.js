const path      = require('path'); 
const express   = require('express');

const app = express();

// ...

app.use(express.json());

app.use(require('./routes'));

app.use(
    express.static(path.join(__dirname, '../../public'))
);

app.listen(8888);

console.log("Backend server starting!");
