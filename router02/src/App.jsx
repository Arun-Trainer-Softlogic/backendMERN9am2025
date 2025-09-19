import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Dashboard from "./component/Dashboard";
import DashboardHome from "./component/DashboardHome";
import Profile from "./component/Profile";
import Settings from "./component/Settings";

export default function App() {
  return (
    <>
      <header className="top-nav">
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/about">About</Link> |{" "}
          <Link to="/contact">Contact</Link> |{" "}
          <Link to="/dashboard">Dashboard</Link>
        </nav>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Dashboard with nested routes */}
          <Route path="/dashboard" element={<Dashboard />}>
            {/* default content shown at /dashboard */}
            <Route index element={<DashboardHome />} />
            {/* dynamic profile by GitHub login */}
            <Route path="profile/:login" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          {/* fallback route, optional */}
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </main>
    </>
  );
}
