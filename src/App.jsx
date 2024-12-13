import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Payment } from "./pages/Payment";
import { Student } from "./pages/Student";
import { Pagina404 } from "./pages/Pagina404";
import { Layout } from "./pages/Layout";
import { LoginPage } from "./pages/LoginPage";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Rota de login */}
        <Route path="/" element={<LoginPage />} />

        {/* Rotas protegidas com layout */}
        <Route path="/" element={<Layout showSidebar={true} />}>
          <Route path="home" element={<Home />} />
          <Route path="payment" element={<Payment />} />
          <Route path="student" element={<Student />} />
        </Route>

        {/* Rota para página 404 */}
        <Route path="*" element={<Pagina404 />} />
      </Routes>
    </Router>
  );
}
