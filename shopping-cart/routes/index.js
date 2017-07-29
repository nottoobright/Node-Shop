var express = require('express'),
    router = express.Router(),
    Product = require('../models/products'),
    Cart = require('../models/cart');


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

router.get('/add-to-cart/:id', function(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    Product.findById(productId, function(err, product) {
        if (err) {
            return res.redirect('/');
        }
        cart.add(product, product.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect('/');
    });
});

router.get('/cart', function(req, res, next) {
    if (!req.session.cart) {
        return res.render('shop/cart', { products: null });
    }
    var cart = new Cart(req.session.cart);
    res.render('shop/cart', { products: cart.generateArray(), totalPrice: cart.totalPrice })
});


module.exports = router;