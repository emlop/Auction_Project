
CREATE TABLE IF NOT EXISTS category (
  id BIGSERIAL PRIMARY KEY,
  categories VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS item_type (
  id BIGSERIAL PRIMARY KEY,
  item VARCHAR(255),
  description TEXT,
  status VARCHAR(32),
  category_id INTEGER REFERENCES category
);

