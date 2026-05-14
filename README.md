<h1 align="center">
  <br>
  DevArena
  <br>
</h1>

<h4 align="center">Level Up Your Coding Journey. A modern coding assessment and competitive programming platform to make students industry-ready.</h4>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#folder-structure">Folder Structure</a> •
  <a href="#run-locally">Run Locally</a> •
  <a href="#license">License</a>
</p>

![DevArena Banner](https://img.shields.io/badge/Status-Active-success)
![Node Version](https://img.shields.io/badge/Node.js-18%2B-green)
![React](https://img.shields.io/badge/React-18-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-lightgrey)

## 🌟 Overview
**DevArena** is a comprehensive Full-Stack platform engineered specifically for students preparing for technical placements, software development roles, and coding interviews. Inspired by leading platforms like CodeChef and LeetCode, it combines aesthetic premium design with high-performance real-time assessment modules.

## ✨ Features

- **Dynamic Landing Page**: Modern glowing glassmorphism UI with animations.
- **Problems Dashboard**: Master Data Structures with targeted questions, filters (Easy/Medium/Hard/Topic), and stats tracking.
- **Live Code Editor**: Embedded `@monaco-editor` resembling professional IDE environments with syntax highlighting.
- **Analytics Dashboard**: Interactive Progress charts (`react-chartjs-2`), Streak Tracking, and Skill proficiency breakdowns.
- **Authentication**: Secure registration/login flows segregated by "Student" and "Admin" roles via JWT tracking.
- **Mock Assessments**: Specifically modeled mock interviews targeting specific Data Structures and algorithms.

## 💻 Tech Stack

### Frontend
- **React.js (Vite)**
- **Vanilla CSS (Glassmorphism & CSS Modules)**
- **Chart.js / React-Chartjs-2**
- **Lucide Icons**
- **Monaco Editor**

### Backend
- **Node.js & Express.js**
- **MongoDB & Mongoose**
- **JWT (JSON Web Tokens)**
- **Bcrypt.js** (Password Hashing)

## 📂 Folder Structure

```
DevArena/
├── client/                 # Frontend React Application
│   ├── public/             # Static Assets
│   └── src/
│       ├── components/     # Reusable UI components (Navbar, etc.)
│       ├── pages/          # Full Page layouts (Home, Dashboard, CodeEditor)
│       ├── styles/         # Global Layout parameters
│       ├── App.jsx         # React Router Map
│       └── main.jsx        # Frontend Entry
├── server/                 # Backend Node/Express API
│   ├── controllers/        # Business Logic Modules
│   ├── database/           # MongoDB Configs
│   ├── middleware/         # Auth verification mechanisms
│   ├── models/             # Mongoose Schemas (User, Problem)
│   ├── routes/             # REST API definition maps
│   └── index.js            # Node Entry Endpoint
└── README.md
```

## 🚀 Run Locally

Ensure you have [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/) installed on your machine.

**1. Clone the repository**
```bash
git clone https://github.com/Tharunsenthilkumar/DevArena.git
cd DevArena
```

**2. Setup the Backend Environment**
```bash
cd server
npm install

# Start the API server on port 5000 (Ensure MongoDB is running locally)
node index.js
```

**3. Setup the Frontend Environment**
```bash
cd ../client
npm install

# Load the Vite development environment
npm run dev
```

Open your browser and navigate to `http://localhost:5173/`

## 👨‍💻 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## 📝 License
This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.
