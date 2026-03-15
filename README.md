# JWT Authentication API

## Project Description
This project is a simple User Authentication and Authorization API built using Node.js, Express.js, MongoDB, Mongoose, and JWT. It follows the MVC pattern and uses Bearer Token for protected routes.

## Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Postman

## Features
- User Registration
- User Login
- Password Hashing with bcryptjs
- JWT Token Generation
- Bearer Token Authentication
- Protected Profile Route
- MVC Folder Structure
- Error Handling

## Folder Structure
auth/
├── config/
│   └── db.js
├── controllers/
│   └── authcontroller.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   └── authmodel.js
├── routes/
│   └── authroutes.js
├── .env
├── .gitignore
├── app.js
├── package.json
└── README.md

## Installation
1. Clone the repository
2. Run npm install
3. Create a .env file
4. Add the following variables:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/authdb
JWT_SECRET=69b6fae8a559d310eca1c467

5. Run the project:
node app.js/npm run dev

## API Endpoints

### Register User
**POST** `/api/auth/register`

Request Body:
```json
{
  "username": "srivani",
  "email": "kattasrivani74@gmail.com",
  "password": "srivani@123"
}