SELECT macbooks.*, products_in_cart.*
FROM products_in_cart
JOIN macbooks
  ON macbooks.id = products_in_cart.macbookid
WHERE products_in_cart.orderid = $1;
