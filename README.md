# 📋 Tasklay App - Task Management System

A full-stack task management application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). Tasklay helps users organize, track, and manage their tasks efficiently with a modern, responsive interface.

## ✨ Features

- **User Authentication**: Secure signup/login system with password encryption
- **Task Management**: Create, read, update, and delete tasks
- **Task Organization**: Categorize and prioritize tasks
- **Real-Time Updates**: Instant task updates across the application
- **Responsive Design**: Built with Tailwind CSS for a seamless experience on all devices
- **RESTful API**: Clean and organized backend API architecture
- **MongoDB Database**: Efficient data storage and retrieval

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library for building interactive interfaces
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Axios/Fetch** - HTTP client for API requests

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **bcrypt** - Password hashing for security
- **JWT** (if implemented) - Token-based authentication

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository:**
```bash
git clone https://github.com/TaouilAnass/Tasklay-App.git
cd Tasklay-App
```

2. **Install Frontend Dependencies:**
```bash
npm install
```

3. **Install Backend Dependencies:**
```bash
cd Back-end
npm install
```

4. **Configure Environment Variables:**

Create a `.env` file in the `Back-end` directory:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

5. **Start MongoDB:**
```bash
# If using local MongoDB
mongod
```

6. **Run the Application:**

**Backend (from Back-end directory):**
```bash
npm start
# or for development with nodemon
npm run dev
```

**Frontend (from root directory):**
```bash
npm start
```

The application will run on:
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5000`

## 🗂️ Project Structure

```
Tasklay-App/
├── Back-end/
│   ├── node_modules/
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   ├── controllers/      # Route controllers
│   ├── middleware/       # Custom middleware
│   ├── config/           # Configuration files
│   ├── server.js         # Entry point
│   └── package.json
├── public/
├── src/
│   ├── components/       # React components
│   ├── pages/           # Page components
│   ├── services/        # API service files
│   ├── utils/           # Utility functions
│   ├── App.js           # Main App component
│   └── index.js         # React entry point
├── package.json
├── tailwind.config.js
└── README.md
```

## 🔑 API Endpoints

### Authentication
```
POST   /api/auth/register    - Register new user
POST   /api/auth/login       - User login
```

### Tasks
```
GET    /api/tasks            - Get all tasks
GET    /api/tasks/:id        - Get single task
POST   /api/tasks            - Create new task
PUT    /api/tasks/:id        - Update task
DELETE /api/tasks/:id        - Delete task
```

## 💡 Usage

1. **Register/Login**: Create an account or log in to access your tasks
2. **Create Tasks**: Click "Add Task" to create a new task with title, description, and priority
3. **Manage Tasks**: Edit, complete, or delete tasks as needed
4. **Organize**: Use categories or priorities to keep your tasks organized

## 🎨 Features Breakdown

### Task Properties
- **Title**: Task name/heading
- **Description**: Detailed task information
- **Status**: Pending, In Progress, Completed
- **Priority**: Low, Medium, High
- **Due Date**: Task deadline
- **Category**: Task categorization

### User Features
- Secure password storage with bcrypt
- Session management
- Personal task dashboard
- Task filtering and sorting

## 🔒 Security Features

- Password encryption using bcrypt
- Protected API routes
- Input validation and sanitization
- Secure HTTP headers
- CORS configuration

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)
```bash
npm run build
```

### Backend Deployment (Heroku/Railway)
1. Set environment variables in hosting platform
2. Deploy from GitHub repository
3. Ensure MongoDB connection is configured

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Future Enhancements

- [ ] Add task reminders and notifications
- [ ] Implement task sharing and collaboration
- [ ] Add file attachments to tasks
- [ ] Create task templates
- [ ] Add calendar view
- [ ] Implement dark mode
- [ ] Mobile app version
- [ ] Task analytics and reports

## 🐛 Known Issues

Report bugs by opening an issue in the GitHub repository.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Anass Taouil**
- GitHub: [@TaouilAnass](https://github.com/TaouilAnass)

## 🙏 Acknowledgments

- MongoDB for the database solution
- Express.js for the backend framework
- React team for the amazing frontend library
- Tailwind CSS for the styling framework

---

⭐ If you find this project helpful, please give it a star!

📧 For questions or feedback, feel free to open an issue or contact me directly.
