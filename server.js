let express = require('express');
let technologger = require('technologger');
let parser = require('body-parser');
let app = express();

app.use('/', express.static('public'));

app.use(parser.json());
app.use(technologger);

app.post('/users', (req, res) => {
    console.log(req.body);
<<<<<<< HEAD
    res.send('0');
=======
    res.send('100');
>>>>>>> 360f02d9b755792ece82f5368db34ce591f93368
    // TODO: вернуть количество обращений
});

app.listen(process.env.PORT || 3000, () => {
	console.log(`App started on port ${process.env.PORT || 3000}`);
});
