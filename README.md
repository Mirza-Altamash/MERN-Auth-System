# MERN-Auth-System
A secure user authentication backend built using Node.js, Express, MongoDB, and JWT.  It includes user signup, login, password hashing with bcrypt, JWT token generation,  and cookie-based authentication following best practices for modern web applications.


## 🚀 Features

- User Signup / Registration
- User Login Authentication
- Password Hashing using **bcryptjs**
- JWT Token Generation
- Cookie-based Authentication
- MongoDB Database Integration
- RESTful API Architecture
- Environment Variable Security with **dotenv**

---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- JSON Web Token (JWT)
- bcryptjs

### Other Tools
- dotenv
- cookie-parser
- cors
- nodemon

---

## 📂 Project Structure

```
user_authentication
│
├── Controllers
│   └── AuthController.js
│
├── Models
│   └── UserModel.js
│
├── Routes
│   └── AuthRoute.js
│
├── util
│   └── SecretToken.js
│
├── .env
├── index.js
├── package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/mern-jwt-authentication.git
```

### 2️⃣ Navigate to Project Folder

```bash
cd mern-jwt-authentication
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Create `.env` File

```
PORT=4000
MONGO_URL=your_mongodb_connection_string
TOKEN_KEY=your_secret_key
```

### 5️⃣ Run the Server

```bash
npm start
```

Server will start at:

```
http://localhost:4000
```

---

## 🔗 API Endpoints

### Signup

```
POST /signup
```

**Body Example**

```json
{
  "name": "Mirza",
  "email": "mirza@gmail.com",
  "password": "123456"
}
```

---

### Login

```
POST /login
```

**Body Example**

```json
{
  "email": "mirza@gmail.com",
  "password": "123456"
}
```

---

## 🔐 Authentication Flow

```
User Signup/Login
       ↓
Password hashed with bcrypt
       ↓
JWT token generated
       ↓
Token stored in cookies
       ↓
Protected routes verify token
```

---

## 📸 API Testing

You can test the APIs using:

- Postman
- Thunder Client
- Insomnia

---

## 📈 Future Improvements

- Protected Routes Middleware
- Refresh Token Authentication
- Role-Based Authorization
- Rate Limiting
- Email Verification
- Password Reset System

---

## 👨‍💻 Author

**Mirza Altamash Baig**

GitHub: https://github.com/yourusername  
LinkedIn: Add your profile here