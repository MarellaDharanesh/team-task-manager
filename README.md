TEAM TASK MANAGER - MERN STACK PROJECT

Project Description:
Team Task Manager is a full-stack MERN application developed to help teams manage projects and tasks efficiently. Users can create projects, add tasks, update task status, and manage workflows through a responsive dashboard.

Technologies Used:
Frontend:
- React.js
- Axios
- CSS
- Vite

Backend:
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication

Deployment:
- Frontend: Vercel
- Backend: Railway

Features:
- User Login Authentication
- Create Project
- View Projects
- Create Task
- View Tasks
- Update Task Status
- Delete Task
- Dashboard Statistics
- MongoDB Database Integration
- Fully Responsive UI

Project Structure:
TeamTaskManager/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── frontend/
    ├── src/
    ├── public/
    ├── App.jsx
    └── package.json

Installation Steps:

1. Clone Repository:
git clone https://github.com/MarellaDharanesh/team-task-manager

2. Install Backend Dependencies:
cd backend
npm install

3. Install Frontend Dependencies:
cd frontend
npm install

4. Start Backend:
npm run dev

5. Start Frontend:
npm run dev

Environment Variables:
Create a .env file inside backend folder and add:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

Live Application:
https://team-task-manager-xi-one.vercel.app

GitHub Repository:
https://github.com/MarellaDharanesh/team-task-manager

Developer:
Marella Dharanesh
