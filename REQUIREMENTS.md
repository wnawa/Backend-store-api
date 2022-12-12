# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index 
- Show
- Create [token required]
- [OPTIONAL] Top 5 most popular products 
- [OPTIONAL] Products by category (args: product category)

#### Users
- Index [token required]
- Show [token required]
- Create N[token required]

#### Orders
- Current Order by user (args: user id)[token required]
- [OPTIONAL] Completed Orders by user (args: user id)[token required]

## Data Shapes
#### Product
-  id
- name
- price
- [OPTIONAL] category

#### User
- id
- firstName
- lastName
- password

#### Orders
- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)


//////////////////////////Migrate Create and drop database
1-Add database connection details in .env file 
enviroment variable used :
POSTGRES_HOST=
POSTGRES_DB=
POSTGRES_TEST_DB=
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DBPORT=
ENV=dev
BCRYPT_PASSWORD=secretpassword
SALT_ROUNDS=10
TOKEN_SECRET=MYSECRET

2-RUN CMD
npm run db-migrate-up
npm run db-migrate-down
//////////////////////////Test for jasmine
npm run test
//////////////////////////Build and Start
 npm run dev-server
 ///////////////////////////////END POINTS test
url test END POINTS USER MODEL
POST http://localhost:8080/user?id=4&firstname=ahmed&lastname=mohe&password=555&username=ahmederfan
GET http://localhost:8080/authenticate?username=ahmederfan&password=555 
GET http://localhost:8080/user
GET http://localhost:8080/user/4


END POINTS PRODUCT MODEL
POST http://localhost:8080/Products?id=3&name=third&price=300
GEt http://localhost:8080/Products
GEt http://localhost:8080/Products/3 //input product id

END POINTS ORDER MODEL
//ADD NEW ORDER WITH NEW PRODUCT TO USER
POST http://localhost:8080/user/:userID/Order/:orderID/product
//add in body inputs to add product details to cart of order
{
"quantity":"5",
"productid":"3"
}
GET http://localhost:8080/user/:userID/Order 
//ADD NEW PRODUCT TO EXISTING ORDER 
POST http://localhost:8080/Order/:orderID/product  
//add in body inputs to add product details to cart of order 1 {
"quantity":"5",
"productid":"3"
}

END POINT DASHBOARD
GET http://localhost:8080/userorder
GET http://localhost:8080/topproducts


DATABASE 
1-TABLE users(id SERIAL PRIMARY KEY, firstname varchar,lastname varchar,password text,username varchar).
2-TABLE orders ( id SERIAL PRIMARY KEY,status_order boolean, user_id INTEGER REFERENCES users(id)).
3-Table Products (id serial PRIMARY KEY,name varchar,price integer).
4-Table order_details(  id SERIAL PRIMARY KEY,order_id INTEGER REFERENCES orders(id), product_id INTEGER REFERENCES products(id),quantity integer).
