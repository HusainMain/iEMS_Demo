import { Outlet } from 'react-router-dom';

const ParentDashboard = () => <div><h1>Parent Dashboard</h1><p>View Child's Attendance, Performance here.</p><Outlet /></div>;
export default ParentDashboard;
