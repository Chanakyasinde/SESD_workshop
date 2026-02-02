# User & Post Backend API

This is a full-fledged RESTful backend for managing **Users** and **Posts** (Articles), strictly following **OOP** principles with **TypeScript**, **Express**, and **Mongoose**.

## Features

### 1. User Management (OOP)
*   **Create User**: Add new users with name, email, role.
*   **Read Users**: Get list of all users or single user by ID.
*   **Update User**: Modify user details.
*   **Delete User**: Remove users.

### 2. Post Management
*   **Create Post**: Add new articles with title, content, author.
*   **Read Posts**: Get all posts or single post.
*   **Update Post**: Edit post title or content.
*   **Delete Post**: Remove posts.
*   *(Note: Refactored from previous 'Todo' codebase).*

## Architecture
The project follows the **Controller-Service-Model** pattern:

*   **Models** (`src/models/`): Database Schemas & Interfaces (`user.model.ts`, `post.model.ts`).
*   **Services** (`src/services/`): Business Logic layers (`user.service.ts`, `post.service.ts`).
*   **Controllers** (`src/controllers/`): Request handlers (`user.controller.ts`, `post.controller.ts`).
*   **Routes** (`src/routes/`): API Endpoint definitions (`user.routes.ts`, `post.routes.ts`).

## API Endpoints

| Resource | Method | Endpoint | Description | Payload |
| :--- | :--- | :--- | :--- | :--- |
| **Users** | `GET` | `/api/users` | Get all users | - |
| | `POST` | `/api/users` | Create user | `{ "name": "...", "email": "...", "role": "..." }` |
| | `GET` | `/api/users/:id` | Get user | - |
| | `PUT` | `/api/users/:id` | Update user | `{ "role": "..." }` |
| | `DELETE` | `/api/users/:id` | Delete user | - |
| **Posts** | `GET` | `/posts` | Get all posts | - |
| | `POST` | `/posts` | Create post | `{ "title": "...", "content": "...", "author": "..." }` |
| | `GET` | `/posts/:id` | Get post | - |
| | `PUT` | `/posts/:id` | Update post | `{ "title": "..." }` |
| | `DELETE` | `/posts/:id` | Delete post | - |

## Installation & Run

1.  **Install**: `npm install`
2.  **Configure**: Update `.env` with your `MONGO_URI`.
3.  **Run**: `npm run dev` (Runs on Port 4000).
