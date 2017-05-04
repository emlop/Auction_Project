const express = require('express');
const controller = require('../controllers/auctionController');

const auctionsRoutes = express.Router();

auctionsRoutes.get('/', controller.index);
auctionsRoutes.get('/add', (req, res) => {
  res.render('auctions/auctions-add', {
    documentTitle: 'Auction App!',
  });
});

auctionsRoutes.get('/edit/:id', controller.edit);
auctionsRoutes.get('/:id', controller.show);
auctionsRoutes.post('/', controller.create);
auctionsRoutes.put('/:id', controller.update);
auctionsRoutes.delete('/:id', controller.destroy);

module.exports = auctionsRoutes;