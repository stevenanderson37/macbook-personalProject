CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(100) UNIQUE,
  password VARCHAR(100),
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  birthday DATE,
  country VARCHAR(100),
  announcements BOOLEAN,
  media BOOLEAN,
  news BOOLEAN
);
