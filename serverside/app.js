var restify = require('restify'),
    config = require('./config'),
    mongoose = require('mongoose'),
    mongoosePaginate = require('mongoose-paginate');

var server = restify.createServer({ name: 'webservice'})

server.pre(restify.CORS());
server.use(restify.fullResponse());
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.CORS({
    origins: ['*']
}));

//Cross browsing issue
restify.CORS.ALLOW_HEADERS.push('accept');
restify.CORS.ALLOW_HEADERS.push('sid');
restify.CORS.ALLOW_HEADERS.push('lang');
restify.CORS.ALLOW_HEADERS.push('origin');
restify.CORS.ALLOW_HEADERS.push('withcredentials');
restify.CORS.ALLOW_HEADERS.push('x-requested-with');

mongoose.connect(config.creds.mongoose_auth);
var ResultsSchema = mongoose.Schema({
    name: String
});

ResultsSchema.plugin(mongoosePaginate)
var Results = mongoose.model('Results', ResultsSchema);
server.get('/results', function(req, res, next) {
    var query = {};
    if (req.params.search) {
        query = {
            $text: {
                $search: req.params.search
            }
        };
    }
    Results.paginate(query, req.params.page, req.params.limit,
        function(error, pageCount, paginatedResults,
            itemCount) {
            var data = {}
            data['data'] = paginatedResults;
            data['total'] = pageCount;
            res.send(data)
        })
});
server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});