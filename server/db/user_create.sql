INSERT INTO users (first_name, last_name, primary_area, primary_phone, street_address_a, city, state, zip, business_address, email)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
RETURNING *;
