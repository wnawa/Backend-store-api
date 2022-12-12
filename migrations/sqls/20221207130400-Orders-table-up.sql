CREATE TABLE orders (
    id SERIAL PRIMARY KEY,

    status_order boolean,
    user_id INTEGER REFERENCES users(id)

    
);
