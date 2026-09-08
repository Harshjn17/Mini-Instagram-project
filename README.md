# 📸 Mini Instagram Project

A simple full-stack Instagram-like application where users can create posts by uploading an image with a caption and view posts in a feed.

## 🚀 Features

* 📷 Upload images
* ✍️ Add captions to posts
* 🖼️ Display uploaded posts
* ☁️ Store images using ImageKit
* 🗄️ Store post information using MongoDB
* ⚡ REST API using Express.js
* ⚛️ React frontend
* 📱 Simple and responsive UI

## 🛠️ Tech Stack

### Frontend

* React.js
* Axios
* CSS

### Backend

* Node.js
* Express.js
* Multer
* MongoDB
* Mongoose
* ImageKit

## 📁 Project Structure

```text
Mini insta project/
│
├── backend/
│   ├── src/
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── .gitignore
└── README.md
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/Harshjn17/Mini-Instagram-project.git
```

### 2. Open the project

```bash
cd Mini-Instagram-project
```

### 3. Install backend dependencies

```bash
cd backend
npm install
```

### 4. Install frontend dependencies

Open another terminal:

```bash
cd frontend
npm install
```

## 🔐 Environment Variables

Create a `.env` file inside the `backend` folder.

```env
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
MONGODB_URI=your_mongodb_connection_string
```

> Never upload your `.env` file or private API keys to GitHub.

## ▶️ Running the Project

### Start the backend

```bash
cd backend
npm start
```

Or, if your project uses nodemon:

```bash
npm run dev
```

### Start the frontend

In another terminal:

```bash
cd frontend
npm run dev
```

The frontend and backend will then run locally.

## 📡 API

### Create Post

```http
POST /create-post
```

Accepts:

* `image` — image file
* `caption` — post caption

### Get Posts

```http
GET /posts
```

Returns the available posts.

## 🎯 Purpose

This project was created as a learning project to practice full-stack web development, REST APIs, file uploads, cloud image storage, databases, and React.

## 👨‍💻 Author

**Harsh**
