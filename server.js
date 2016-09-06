let express = require('express');
//let technologger = require('technologger');
let parser = require('body-parser');
let app = express();

app.use('/', express.static('public'));

app.use(parser.json());

let count ={};

//app.use(technologger);
app.post('/users', (req, res) => {
    if(count[req.body['email']]){
        count[req.body['email']]++;
    } else{
        count[req.body['email']]=1;
    };
    //console.log(req.body);
    res.send(count[req.body['email']].toString());
    // TODO: вернуть количество обращений
});

app.listen(process.env.PORT || 3000, () => {
	console.log(`App started on port ${process.env.PORT || 3000}`);
});
