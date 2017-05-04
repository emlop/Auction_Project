const db = require('../db/config');

const Auction = {};

Auction.findAll = () => {
  return db.query('SELECT * FROM auctions ORDER BY id ASC');
};

Auction.findById = id => {
  return db.oneOrNone('SELECT * FROM auctions WHERE id = $1', [id]);
};

Auction.create = auction => {
  return db.one(
    `
    INSERT INTO auctions
    (item, description, status)
    VALUES ($1, $2, $3) RETURNING *
    `,
    [auction.item, auction.description, auction.status]
  );
};

Auction.update = (auction, id) => {
  return db.oneOrNone(
    `
    UPDATE auctions SET
    item = $1,
    description = $2,
    status = $3,
    categories = $4,
    category_id = $5,
    WHERE id = $6
    `,
    [auction.item, auction.description, auction.status,
    auction.categories, auction.category_id, id]
  );
};

Auction.destory = id => {
  return db.none(
    `
    DELETE FROM auctions
    WHERE id = $1
    `,
    [id]
  );
};

module.exports = Auction;