import { useState, useEffect } from "react";
import type { User } from "../Types/types"; // Rename Product to User in your types file
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get<User[]>("https://dbalone.onrender.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      {users.length === 0 && <p>Loading...</p>}
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.username} - {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
