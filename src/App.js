import { Route, Routes } from "react-router-dom";
import ProductsTable from "./pages/ProductsTable";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Information from "./pages/Information";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Banners from "./components/Banners";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="w-4/5 mx-auto px-4">
        <Banners />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogue" element={<ProductsTable />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/general-information" element={<Information />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
