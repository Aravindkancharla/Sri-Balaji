import React, { useEffect } from "react";
import "./AdminDashboard.css";
import Header from "./Header";

const AdminDashboard = () => {
  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    if (!token) {
      window.location.href = "/admin-login";
      return;
    }

    fetch(`${process.env.REACT_APP_API_URL}/api/admin/dashboard`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .catch(() => {
        localStorage.removeItem("adminToken");
        window.location.href = "/admin-login";
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin-login";
  };

  return (
    <>
      {/* Main Website Header */}
      <Header />

      <div className="admin-dashboard">
        {/* Admin Navbar */}
        <div className="admin-navbar">
          <h1>Admin Dashboard</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>

        {/* Dashboard Content */}
        <section className="admin-dashboard-content">
          <div className="admin-card">
            <h3>Manage Projects</h3>
            <p>Add, edit, or remove projects displayed on the website.</p>
          </div>

          <div className="admin-card">
            <h3>Manage Images</h3>
            <p>Update landing page and project gallery images.</p>
          </div>

          <div className="admin-card">
            <h3>Contact Requests</h3>
            <p>View and respond to customer enquiries.</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default AdminDashboard;
