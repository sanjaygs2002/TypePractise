import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Components/AuthContext";
import Navbar from "./Components/NavBar";


import Login from "./Components/LoginForm";
import ProductList from "./Components/ProductList";
import CheckoutForm from "./Components/CheckoutForm";
import Reducers from "./Components/Reducers";
import Weather from "./Redux/weather";

const Home = () => <h1>Home Page</h1>;
const AdminPage = () => <h1>Admin Dashboard</h1>;
const Orders = () => <h1>My Orders</h1>;
const ManageProducts = () => <h1>Manage Products</h1>;
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />

        <div style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

          
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/products" element={<ManageProducts />} />
            <Route path="/shop" element={<ProductList />} />
            <Route path="/checkout" element={<CheckoutForm />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/counter" element={<Reducers/>} />
            <Route path="/weather" element={<Weather/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
