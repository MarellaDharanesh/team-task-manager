import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [email, setEmail] = useState("dharanesh@gmail.com");
  const [password, setPassword] = useState("123456");

  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

  const [selectedProject, setSelectedProject] = useState("");

  const completed = tasks.filter((task) => task.status === "Completed").length;
  const pending = tasks.filter((task) => task.status === "Pending").length;

  const loginUser = async () => {
    const res = await axios.post("http://localhost:5000/api/auth/login", {
      email,
      password,
    });

    localStorage.setItem("token", res.data.token);
    alert("Login Successful");

    getTasks();
    getProjects();
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    alert("Logged out");
  };

  const getTasks = async () => {
    const res = await axios.get("http://localhost:5000/api/tasks");
    setTasks(res.data);
  };

  const getProjects = async () => {
    const res = await axios.get("http://localhost:5000/api/projects");
    setProjects(res.data);
  };

  const createProject = async () => {
    await axios.post("http://localhost:5000/api/projects", {
      name: projectName,
      description: projectDescription,
      members: [],
    });

    alert("Project Created");

    setProjectName("");
    setProjectDescription("");

    getProjects();
  };

  const createTask = async () => {
    await axios.post("http://localhost:5000/api/tasks", {
      title,
      description,
      project: selectedProject,
      status: "Pending",
    });

    setTitle("");
    setDescription("");
    setSelectedProject("");

    getTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    getTasks();
  };

  const updateTaskStatus = async (id) => {
    await axios.put(`http://localhost:5000/api/tasks/${id}`, {
      status: "Completed",
    });

    getTasks();
  };

  useEffect(() => {
    getTasks();
    getProjects();
  }, []);

  return (
    <div className="container">
      <h1>Team Task Manager</h1>

      <div className="card">
        <h2>Login</h2>

        <input value={email} onChange={(e) => setEmail(e.target.value)} />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={loginUser}>Login</button>
        <button onClick={logoutUser}>Logout</button>
      </div>

      <div className="dashboard">
        <div>Total Tasks: {tasks.length}</div>
        <div>Pending: {pending}</div>
        <div>Completed: {completed}</div>
        <div>Total Projects: {projects.length}</div>
      </div>

      <div className="card">
        <h2>Create Project</h2>

        <input
          placeholder="Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />

        <input
          placeholder="Project Description"
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
        />

        <button onClick={createProject}>Create Project</button>
      </div>

      <div className="card">
        <h2>Create Task</h2>

        <input
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <select
          value={selectedProject}
          onChange={(e) => setSelectedProject(e.target.value)}
        >
          <option value="">Select Project</option>

          {projects.map((project) => (
            <option key={project._id} value={project._id}>
              {project.name}
            </option>
          ))}
        </select>

        <button onClick={createTask}>Create Task</button>
      </div>

      <h2>Projects</h2>

      {projects.map((project) => (
        <div className="task-card" key={project._id}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ))}

      <h2>Tasks</h2>

      {tasks.map((task) => (
        <div className="task-card" key={task._id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Status: {task.status}</p>

          <button onClick={() => updateTaskStatus(task._id)}>
            Mark Completed
          </button>

          <button className="delete" onClick={() => deleteTask(task._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;