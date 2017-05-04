const Auction = require('../models/auction');

const controller = {};

controller.index = (req, res) => {
  Auction.findAll()
    .then(auctions => {
      res.render('auctions/auctions-index', {
        documentTitle: 'Auction App',
        auctionData: auctions,
      });
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

controller.show = (req, res) => {
  Auction.findById(req.params.id)
    .then(auction => {
      res.render('auctions/auctions-single', {
        documentTitle: 'Auction App',
        auction: auction,
      });
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

controller.create = (req, res) => {
  console.log('hello');
  Auction.create({
    item: req.body.item,
    description: req.body.description,
    status: req.body.status,
    category_id: req.body.category_id
  })
  .then(auction => {
    res.redirect('/auctions');
  })
  .catch(err => {
    res.status(400).json(err);
  });
};

controller.edit = (req, res) => {
  Auction.findById(req.params.id)
    .then(auction => {
      res.render('auctions/auctions-edit', {
        documentTitle: 'Auction App',
        auction: auction,
        id: req.params.id,
      });
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

controller.update = (req, res) => {
  Auction.update(
    {
      item: req.body.item,
      description: req.body.description,
      status: req.body.status,
      category_id: req.body.category_id
    }, req.params.id)
  .then(auction => {
    res.redirect('/auctions');
  })
  .catch(err => {
    res.status(400).json(err);
  });
};

controller.destroy = (req, res) => {
  Auction.destroy(req.params.id)
    .then(() => {
      res.redirect('/auctions');
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

module.exports = controller;