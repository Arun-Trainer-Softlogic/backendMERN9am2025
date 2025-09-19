import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch("https://api.github.com/users/arun-cloud-dev/followers")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        // keep the first 3 followers
        setFollowers(Array.isArray(data) ? data.slice(0, 3) : []);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <h2>Dashboard</h2>
        <div className="small-muted">Fetched from GitHub</div>
      </div>

      <nav className="dashboard-nav">
        {loading && <span>Loading followers…</span>}
        {error && <span style={{color:"crimson"}}>Error: {error}</span>}
        {!loading && !error && followers.length === 0 && <span>No followers found</span>}

        {!loading && !error && followers.map((f) => (
          <Link
            key={f.id}
            to={`profile/${f.login}`}   // relative link -> /dashboard/profile/:login
            className="follower-link"
          >
            <img src={f.avatar_url} alt={f.login} width="36" style={{ borderRadius: 8 }} />
            <span>{f.login}</span>
          </Link>
        ))}

        <Link to="settings" className="follower-link">Settings</Link>
      </nav>

      {/* nested route outlet; Profile or DashboardHome will render here */}
      <Outlet />
    </div>
  );
}
