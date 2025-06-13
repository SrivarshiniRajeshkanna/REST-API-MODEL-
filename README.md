# REST-API 
1) This is a beginner-friendly REST API for managing users using Node.js, Express.js, and MongoDB (via Mongoose). It allows you to create, read, update, and delete user data — tested using Postman.

### 🚀 Features
1. Add new books to the collection
2. View all books or a specific book by ID
3. Update book details
4. Delete a book from the database
5. JSON-based request & response system
6. Error handling with status codes

### 🛠 Tech Stack
1. Backend: Node.js, Express.js

2. Database: MongoDB Atlas

3. ODM: Mongoose

4. Testing Tool: Postman

## INSTALL DEPENDENCIES :
1) npm init -y
2) npm install express
3) npm install mongoose 
4) npm start 

### 🧪 Test Using Postman
1) Open Postman

2) Use http://localhost:3000/users as base URL

3) Use GET, POST, PUT, DELETE to test the routes

### NOTES:
No controller or middleware used in this version — routes and model are combined in user.js for simplicity.
Best suited for learning or small backend experiments.