var express = require('express'),
    router = express.Router(),
    Product = require('../models/products'),
    passport = require('passport'),
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

router.get('/signup', function(req, res, next) {
    var messages = req.flash('error');
    res.render('user/signup', { csrfToken: req.csrfToken(), messages: messages, hasError: messages.length > 0 });
});

router.get('/signin', function(req, res, next) {
    var messages = req.flash('error');
    res.render('user/signin', { csrfToken: req.csrfToken(), messages: messages, hasError: messages.length > 0 });
});

router.get('/profile', function(req, res, next) {
    res.render('user/profile');
});




router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
}));

router.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/profile',
    failureRedirect: '/signin',
    failureFlash: true
}));

module.exports = router;