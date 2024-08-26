var bodyParser = require('body-parser');

var urlEncodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app) {

    app.get('/', function(req, resp) {
        resp.render('index');
    })

    app.get('/person/:id', function(req, resp) {
        resp.render('person', {ID: req.params.id, QSTR: req.query.qstr});
    });

    app.post('/person', urlEncodedParser, function(req, resp) {
        resp.send('Thank you!');
    });

}