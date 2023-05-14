import { useSelector } from "react-redux";
import {
  BrowserRouter,
  Navigate,
  Route,
  Redirect,
  Routes,
  useNavigate,
  Router,
} from "react-router-dom";
import Dashboard from "scenes/dashboard";
import Layout from "scenes/layout";
import ThemeSetting from "components/ThemeSetting";
import Helmet from "react-helmet";
import Products from "scenes/products";
import { useEffect } from "react";
import Customers from "scenes/customers";
import Transactions from "scenes/Transactions";
import Geography from "scenes/Geography";
import Overview from "scenes/Overview";
import Daily from "scenes/Daily";
import Monthly from "scenes/Monthly";
import Breakdown from "scenes/Breakdown";
import Admin from "scenes/Admin";

function App() {
  const { mode, themeset, activeMenu } = useSelector((state) => state.global);
  document.body.style.background = `${mode === "dark" ? "#20232A" : "#FAFBFB"}`;

  return (
    <div
      style={{ height: "100%", width: "100%" }}
      className={`${
        mode === "dark" ? "bg-main-dark-bg text-white" : "bg-main-bg"
      }`}
    >
      {themeset && <ThemeSetting />}
      <BrowserRouter>
        <Layout />
        <div className={`${activeMenu ? " md:ml-64" : "ml-3"}`}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/geography" element={<Geography />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/daily" element={<Daily />} />
            <Route path="/monthly" element={<Monthly />} />
            <Route path="/breakdown" element={<Breakdown />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
