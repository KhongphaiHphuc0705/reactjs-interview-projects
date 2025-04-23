import { useEffect, useState } from "react";
import User from "./card.jsx";
import "./styles.css";

export default function GithubProfileFinder() {
  const [username, setUsername] = useState("KhongphaiHphuc0705");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchGithubProfile() {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    if (data) {
      setUserData(data);
      setLoading(false);
      setUsername("");
    }
  }

  const handleSubmit = () => {
    fetchGithubProfile();
  };

  useEffect(() => {
    fetchGithubProfile();
  }, []);

  if (loading) {
    return <div className="loader">Loading...</div>;
  }

  return (
    <div className="container">
      <div className="input-container">
        <input
          type="text"
          name="search-by-username"
          placeholder="Search Github Username"
          value={username}
          autoComplete="off"
          onChange={(event) => setUsername(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
}
