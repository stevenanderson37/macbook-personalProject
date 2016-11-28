CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(100) UNIQUE,
  password VARCHAR(100),
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  birthday DATE,
  company_name VARCHAR(100),
  primary_area VARCHAR(100),
  primary_phone VARCHAR(100),
  street_address_a VARCHAR(100),
  street_address_b VARCHAR(100),
  city VARCHAR(100),
  state VARCHAR(100),
  zip VARCHAR(100),
  business_address BOOLEAN,
  mobile_area VARCHAR(100),
  mobile_phone VARCHAR(100)
);
