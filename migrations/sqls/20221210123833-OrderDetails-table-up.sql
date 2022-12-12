create table order_details(
  id SERIAL PRIMARY KEY,
   order_id INTEGER REFERENCES orders(id),
    product_id INTEGER REFERENCES products(id),
quantity integer
);