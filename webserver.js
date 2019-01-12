import path from 'path';
import express from 'express';

let app = express();
let router = express.Router();

router.get('/', function(request, response) {
    response.sendFile(path.join(__dirname + '/web/index.html'));
});

app.use('/', router);

app.listen(8080, '0.0.0.0');

console.log('Running express...');
console.log('Visit http://localhost:8080/');