import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Profile() {
  const { login } = useParams(); // grabs :login from /dashboard/profile/:login
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(!!login);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!login) return;

    setLoading(true);
    setError(null);

    fetch(`https://api.github.com/users/${login}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => setUser(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [login]);

  if (!login) return null;
  if (loading) return <p>Loading profile for "{login}"…</p>;
  if (error) return <p style={{color:"crimson"}}>Error: {error}</p>;
  if (!user) return <p>User data not available</p>;

  return (
    <div className="profile" aria-live="polite">
      <img src={user.avatar_url} alt={user.login} />
      <div>
        <h3>{user.name || user.login}</h3>

        <p className="small-muted">@{user.login}</p>

        <p>{user.bio || <span className="small-muted">No bio</span>}</p>

        <p><strong>Followers:</strong> {user.followers} &nbsp; <strong>Repos:</strong> {user.public_repos}</p>

        
        <p><strong>Location:</strong> {user.location || "—"}</p>



        <p><a href={user.html_url} target="_blank" rel="noreferrer">View on GitHub</a></p>
      </div>
    </div>
  );
}
