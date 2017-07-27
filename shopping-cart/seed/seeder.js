var Product = require('../models/products'),
    mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/shop");

var products = [
    new Product({
        imagePath: "http://gamepreorders.com/wp-content/uploads/2016/03/overwatch-cover.jpg",
        title: "Overwatch",
        description: "In a time of global crisis, an international task force of heroes banded together to restore peace to a war-torn world: Overwatch. It ended the crisis and helped to maintain peace in the decades that followed, inspiring an era of exploration, innovation, and discovery.",
        price: 39.99

    }),
    new Product({
        imagePath: "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg",
        title: "Witcher 3",
        description: "The Witcher® 3: Wild Hunt is a story-driven, next-generation open world role-playing game, set in a visually stunning fantasy universe, full of meaningful choices and impactful consequences. You play as Geralt of Rivia, a monster hunter tasked with finding a child from an ancient prophecy.",
        price: 39.99,

    }),
    new Product({
        imagePath: "http://www.mobygames.com/images/covers/l/321679-life-is-strange-limited-edition-windows-front-cover.jpg",
        title: "Life is Strange",
        description: "Life is Strange takes place in the fictional town of Arcadia Bay, Oregon, where senior student Max Caulfield returns after a five-year absence. Reunited with her former friend Chloe Price, the pair will attempt to uncover the uncomfortable truth behind the mysterious disappearance of fellow student Rachel Amber.",
        price: 9.99,

    }),
    new Product({
        imagePath: "https://vignette4.wikia.nocookie.net/gtawiki/images/7/76/CoverArt-GTAV.png/revision/latest?cb=20130826184215",
        title: "GTA V",
        description: "Grand Theft Auto V. Grand Theft Auto V is an action-adventure video game developed by Rockstar North and published by Rockstar Games. It was released on 17 September 2013 for the PlayStation 3 and Xbox 360, on 18 November 2014 for the PlayStation 4 and Xbox One, and on 14 April 2015 for Microsoft Windows.",
        price: 39.99,
    }),
    new Product({
        imagePath: "https://www.mmobase.de/img/spiele/cover/f1-2017-original.jpg",
        title: "F1 2017",
        description: "The official videogame of the 2017 FIA Formula One World Championship, F1 2017 includes a new career mode that will take gamers deeper into the world's most glamorous, exciting and prestigious motorsport, both on and off the track. F1 2017 is definitively the best Formula One game Codemasters has ever crafted.",
        price: 20.00,
    }),
    new Product({
        imagePath: "http://vignette4.wikia.nocookie.net/battlefield/images/a/a7/Battlefield_1_PC_Cover_Art.jpg/revision/latest?cb=20160508015714",
        title: "Battlefield 1",
        description: "Similar to previous entries in the series, Battlefield 1 is a first-person shooter that emphasizes teamwork. The game is set in the period of World War I, and is inspired by historic events. ... Melee combat was reworked, with DICE introducing new melee weapons such as sabres, trench clubs, and shovels into the game.",
        price: 39.99,

    })
];

var done = 0;

for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        if (err) {
            console.log(err);
        }
        done++;
        if (done === products.length) {
            exit();
        }
    });
};

function exit() {
    mongoose.disconnect();
}