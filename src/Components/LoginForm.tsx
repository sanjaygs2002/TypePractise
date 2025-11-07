import { useState } from "react";
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [role, setRole] = useState<"admin" | "customer">("customer");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = () => {
    login(role);
    navigate("/"); 
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login</h2>

      <label>Select Role:</label>
      <select value={role} onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
  setRole(e.target.value as "admin" | "customer")
}>
        <option value="customer">Customer</option>
        <option value="admin">Admin</option>
      </select>

      <br /><br />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Login;
