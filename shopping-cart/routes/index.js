var express = require('express'),
    router = express.Router(),
    Product = require('../models/products'),
    csrf = require('csurf');

var csrfProtection = csrf();
router.use(csrfProtection);

/* GET home page. */
router.get('/', function(req, res, next) {
    Product.find(function(err, obj) {
        var productChunks = [];
        var chunkSize = 3;
        for (var i = 0; i < obj.length; i += chunkSize) {
            productChunks.push(obj.slice(i, i + chunkSize));
        }
        res.render('shop/index', { title: 'Shopping Cart', products: productChunks });
    });

});

router.get('/user/signup', function(req, res, next) {
    res.render('user/signup', { csrfToken: req.csrfToken() });
});

router.post('/user/signup', function(req, res, next) {
    res.redirect('/');
});

module.exports = router;