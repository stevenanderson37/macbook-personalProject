SELECT prod.*, pic.*
FROM products_in_cart pic
JOIN products prod
ON prod.id = pic.productid
WHERE pic.orderid = $1;
