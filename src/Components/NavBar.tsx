

import { Link } from "react-router-dom";
import { useAuth } from "./useAuth";

const Navbar = () => {
  const { role, logout } = useAuth();

  return (
    <nav style={{ display: "flex", gap: "16px", padding: "10px", background: "#eee" }}>
      <Link to="/">Home</Link>

      {role === "admin" && (
        <>
          <Link to="/admin">Admin Dashboard</Link>
          <Link to="/products">Manage Products</Link>
        </>
      )}

      {role === "customer" && (
        <>
          <Link to="/shop">Shop</Link>
          <Link to="/orders">My Orders</Link>
        </>
      )}

      {role ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <>
          <Link to="/login">Login</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
