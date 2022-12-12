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
npm install -g db-migrate
npm i db-migrate db-migrate-pg
db-migrate create products_table --sql-file
db-migrate create users_table --sql-file
db-migrate create Orders-table --sql-file
db-migrate create OrderDetails-table --sql-file
npm run db-migrate-up
(RUN down CMD WHEN NEEDED)
npm run db-migrate-down
//////////////////////////Test for jasmine

npm run test
//////////////////////////Build and Start
 npm run dev-server

///////////////////////////////END POINTS test
END POINTS USER MODEL
POST http://localhost:8080/Signup?id=4&firstname=ahmed&lastname=mohe&password=555&username=ahmederfan
GET http://localhost:8080/authenticate?username=ahmederfan&password=555 
GET http://localhost:8080/user
GET http://localhost:8080/user/:userID


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
