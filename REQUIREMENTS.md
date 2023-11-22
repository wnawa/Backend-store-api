# API Description
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view on a cart page. I have been tasked with building the API that will support this application, and I am building the front-end app as well.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed to meet the requirements of the application. 

## Technology Used
#### Typescript is used for coding.
#### Eslint is used for linting.
#### prettier is used for formatting.
#### Jasmine/supertest are used for Unit testing.
#### Nodemon utility is used to detect code changes.
#### NodeJs/Express is used for routing and HTTP utility methods.
#### Dotenv is used for environment variables.
#### Postgres is used for the database.
#### db-migrate for database migrations.
#### jsonwebtoken and bcrypt were used for authentications.

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
