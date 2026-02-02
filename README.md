# User Management Backend

This is a full-fledged CRUD backend for managing **Users**, implementing Object-Oriented Programming (OOP) principles with TypeScript, Express, and Mongoose.

## Features
- **CRUD Operations**: Create, Read (Single + List), Update, Delete for Users.
- **Resource**: User (Name, Email, Role).
- **Architecture**: OOP-based (Controller, Service, Model, Route).

## Code Structure
The project follows a modular **Controller-Service-Model** pattern:

- `src/models/user.model.ts` → **User Model** (Mongoose Schema & Interface)
- `src/services/user.service.ts` → **User Service** (Business Logic)
- `src/controllers/user.controller.ts` → **User Controller** (Request Handling)
- `src/routes/user.routes.ts` → **User Routes** (API Definitions)
- `src/app.ts` → **App Class** (Server Configuration & DB Connection)

## API Endpoints (`/api/users`)

| Method | Endpoint | Description | Payload Example |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/users` | Get all users | - |
| `GET` | `/api/users/:id` | Get user by ID | - |
| `POST` | `/api/users` | Create a new user | `{ "name": "John Doe", "email": "john@example.com", "role": "admin" }` |
| `PUT` | `/api/users/:id` | Update user | `{ "role": "user" }` |
| `DELETE` | `/api/users/:id` | Delete user | - |

## Installation & Run

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Configure Environment**:
    Ensure your `.env` file has the following:
    ```env
    PORT=4000
    MONGO_URI=mongodb://localhost:27017/sesd_workshop1
    ```

3.  **Start the Server**:
    ```bash
    npm run dev
    ```
    *Server runs on port 4000 by default.*
