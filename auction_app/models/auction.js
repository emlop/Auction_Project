const db = require('../db/config');

const Auction = {};

Auction.findAll = () => {
  return db.query('SELECT * FROM item_type LEFT JOIN category ON item_type.category_id = category.id');
};

Auction.findById = id => {
  return db.oneOrNone('SELECT * FROM item_type WHERE id = $1', [id]);
};

Auction.create = auction => {
  console.log(auction);
  return db.one(
    `
    INSERT INTO item_type
    (item, description, status, category_id)
    VALUES ($1, $2, $3, $4) RETURNING *
    `,
    [auction.item, auction.description, auction.status, auction.category_id]
  );
};

Auction.update = (auction, id) => {
  return db.oneOrNone(
    `
    UPDATE item_type SET
    item = $1,
    description = $2,
    status = $3,
    category_id = $4
    WHERE id = $5
    `,
    [auction.item, auction.description, auction.status,
    auction.category_id, id]
  );
};

Auction.destory = id => {
  return db.none(
    `
    DELETE FROM item_type
    WHERE id = $1
    `,
    [id]
  );
};

module.exports = Auction;