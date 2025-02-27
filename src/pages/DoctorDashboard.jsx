import { useState } from "react";

function DoctorDashboard() {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const patients = [
    { id: 1, name: "John Doe", age: 45, condition: "Diabetes", lastVisit: "2024-02-05" },
    { id: 2, name: "Jane Smith", age: 38, condition: "Hypertension", lastVisit: "2024-01-20" },
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="sidebar-title">Doctor Panel</h2>
        <nav className="sidebar-nav">
          <button className="sidebar-button">Dashboard</button>
          <button className="sidebar-button">Patients</button>
          <button className="sidebar-button">Settings</button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1 className="main-title">Doctor's Dashboard</h1>

        {/* Dashboard Overview */}
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h2 className="card-title">Upcoming Appointments</h2>
            <p>No upcoming appointments.</p>
          </div>
          <div className="dashboard-card">
            <h2 className="card-title">Notifications</h2>
            <p>No new notifications.</p>
          </div>
        </div>

        {/* Patients List */}
        <div className="dashboard-card">
          <h2 className="card-title">Search Patient</h2>
          <input type="text" placeholder="Search by name or condition..." className="search-input" />
          <ul className="patient-list">
            {patients.map((patient) => (
              <li
                key={patient.id}
                className="patient-item"
                onClick={() => setSelectedPatient(patient)}
              >
                {patient.name} - {patient.condition}
              </li>
            ))}
          </ul>
        </div>

        {/* Patient Details */}
        {selectedPatient && (
          <div className="dashboard-card">
            <h2 className="card-title">Patient Details</h2>
            <p><strong>Name:</strong> {selectedPatient.name}</p>
            <p><strong>Age:</strong> {selectedPatient.age}</p>
            <p><strong>Condition:</strong> {selectedPatient.condition}</p>
            <p><strong>Last Visit:</strong> {selectedPatient.lastVisit}</p>
            <textarea className="notes-textarea" placeholder="Add appointment notes..."></textarea>
            <button className="analyze-button">Analyze with AI</button>
          </div>
        )}
      </main>
    </div>
  );
}

export default DoctorDashboard;

/* CSS Styles */
const styles = `
.dashboard-container {
  display: flex;
  height: 100vh;
  background: linear-gradient(135deg, #1e1e2f, #252545);
  color: white;
  font-family: Arial, sans-serif;
}
.sidebar {
  width: 260px;
  background: #181828;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sidebar-title {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 20px;
}
.sidebar-button {
  background: none;
  border: 2px solid #3498db;
  color: white;
  padding: 12px;
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
  margin: 10px 0;
  transition: 0.3s;
  font-size: 1rem;
}
.sidebar-button:hover {
  background: #3498db;
}
.main-content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}
.main-title {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
}
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}
.dashboard-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: 0.3s;
}
.dashboard-card:hover {
  transform: scale(1.05);
}
.card-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
}
.search-input {
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  border: none;
}
.patient-list {
  list-style: none;
  padding: 0;
}
.patient-item {
  background: rgba(255, 255, 255, 0.1);
  padding: 12px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
  text-align: center;
  margin-top: 10px;
}
.patient-item:hover {
  background: #3498db;
}
.notes-textarea {
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  border: none;
  margin-top: 10px;
}
.analyze-button {
  background: #3498db;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 10px;
  transition: 0.3s;
  font-size: 1rem;
}
.analyze-button:hover {
  background: #217dbb;
}`;

const styleElement = document.createElement("style");
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);
