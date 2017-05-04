\connect auction_development

CREATE TABLE IF NOT EXISTS item_type (
  id BIGSERIAL PRIMARY KEY,
  item VARCHAR(255)
  description VARCHAR(255),
  status VARCHAR(32)
);

CREATE TABLE IF NOT EXISTS category (
  id BIGSERIAL PRIMARY KEY,
  categories VARCHAR(255)
);