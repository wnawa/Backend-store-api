# API Description
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. I have been tasked with building the API that will support this application, 
and I built a sample frontend APP too.

These are the notes that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed to meet the requirements of the application. 

## API Endpoints
#### Products
- Index 
- Show
- Create [token required]
- Top 5 most popular products 
- Products by category (args: product category)

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

## Migrate Create and drop database
   
#### Add database connection details in .env file 
    enviroment variable used :
    POSTGRES_HOST=localhost
    POSTGRES_DB=my_db
    POSTGRES_TEST_DB=my_db_test
    POSTGRES_USER=postgres
    POSTGRES_PASSWORD="1234"
    POSTGRES_DBPORT=5432
    ENV=dev
    BCRYPT_PASSWORD=secretpassword
    SALT_ROUNDS=10
    TOKEN_SECRET=MYSECRET
    PORT=8080

## Database setup CMD
    npm install -g db-migrate
    npm i db-migrate db-migrate-pg
    db-migrate create products_table --sql-file
    db-migrate create users_table --sql-file
    db-migrate create Orders-table --sql-file
    db-migrate create OrderDetails-table --sql-file
    npm run db-migrate-up
    (RUN down CMD WHEN NEEDED)
    npm run db-migrate-down

## Unite Testing is done using Jasmine
#### Jasmine Setup
    IN Jasmine.json SET RANDOM=FALSE;
    npm run test

## Build and Start CMD
 npm run dev-server

## END POINTS API 
#### For API Testing ADD token to header authentication with Bearer 
token =eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo0LCJmaXJzdG5hbWUiOiJhaG1lZCIsImxhc3RuYW1lIjoibW9oZSIsInBhc3N3b3JkIjoiJDJiJDEwJGFkUXVvL05DdjY4SnA0NENISFguc08zWlZ1Q1JGZUtaOFVER0VuSC9pYkdwVUtyd0tTZ095IiwidXNlcm5hbWUiOiJhaG1lZGVyZmFuIn0sImlhdCI6MTY3MDk0OTQ0Nn0.4V-sSzRkmSYw4W4ThE0QOcgMLOEow3il6zFaCbzy4o0

## END POINTS API URL for USER MODEL
#### Add New User
POST http://localhost:8080/Signup?id=4&firstname=ahmed&lastname=mohe&password=555&username=ahmederfan
### updates User to removing id 
POST http://localhost:8080/Signup?firstname=ahmed&lastname=mohe&password=555&username=ahmederfan
### Authenticate User
GET http://localhost:8080/authenticate?username=ahmederfan&password=555 
### Get User
GET http://localhost:8080/user
### Get User By id
GET http://localhost:8080/user/:userID


## END POINTS API URL for PRODUCT MODEL
#### Add New Product
POST http://localhost:8080/Products?id=3&name=third&price=300
#### Get Products
GET http://localhost:8080/Products
#### Get Products by Id 3
GET http://localhost:8080/Products/3 

## END POINTS API URL for ORDER MODEL
### ADD NEW ORDER WITH NEW PRODUCT TO USER
POST http://localhost:8080/user/:userID/Order/:orderID/product
#### Note: Add the following data in the body inputs to add product details to the cart of order 1 for testing
{
"quantity":"5",
"productid":"3"
}
### Get EXISTING ORDER for user with userID
GET http://localhost:8080/user/:userID/Order 

### ADD NEW PRODUCT TO EXISTING ORDER 
POST http://localhost:8080/Order/:orderID/product  
#### Note: Add the following data in the body inputs to add product details to the cart of order 1 for testing
{
"quantity":"5",
"productid":"3"
}

## END POINT API URL for DASHBOARD
GET http://localhost:8080/userorder

## END POINT API URL for Top Products
GET http://localhost:8080/topproducts
