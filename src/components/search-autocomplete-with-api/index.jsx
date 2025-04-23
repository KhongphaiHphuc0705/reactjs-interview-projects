import { useEffect, useState } from "react";
import Suggestions from "./suggestions";

export default function SearchAutocomplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  async function fetchUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      console.log(data);
      if (data && data.users && data.users.length > 0) {
        setUsers(data.users.map((user) => user.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      console.log("Error fetching users:", error);
      setError(error);
    }
  }

  const handleChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 0) {
      const filtered = users && users.length ? users.filter((user) => user.toLowerCase().indexOf(query) > -1) : [];
      setFilteredUsers(filtered);
      setShowDropdown(true);
    }
  };

  const handleClick = (event) => {
    console.log(event.target.innerText);
    setShowDropdown(false);
    setSearchParam(event.target.innerText);
    setFilteredUsers([]);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(users, filteredUsers);

  return (
    <div className="container">
      {loading ? <p>Loading...</p> : error ? <p>Error fetching users</p> : null}
      <input type="text" name="search-users" placeholder="Search Users here" value={searchParam} onChange={handleChange} />
      {showDropdown && <Suggestions handleClick={handleClick} data={filteredUsers} />}
    </div>
  );
}
