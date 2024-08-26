var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();

module.exports = function(app) {

    app.get('api/person/:id', function(req, resp) {
        // get data from database
        resp.json({firstname: 'Shubhangi', lastname: 'Modi'});
    });

    app.post('/api/person', jsonParser, function(req, resp) {

    });

}