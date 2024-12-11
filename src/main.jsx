import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import { Home } from "./pages/Home";
import { Payment } from "./pages/Payment";
import { Student } from "./pages/Student";
import { Pagina404 } from "./pages/Pagina404";
import { Layout } from "./pages/Layout"
import { LoginPage } from "./pages/LoginPage"


const rotas = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Rota principal redirecionando para LoginPage */}
      <Route path="/" element={<LoginPage />} />

      {/* Rotas com Layout e Sidebar */}
      <Route path="/" element={<Layout showSidebar={true} />}>
        <Route path="home" element={<Home />} />
        <Route path="payment" element={<Payment />} />
        <Route path="student" element={<Student />} />
      </Route>

      {/* Página 404 sem sidebar */}
      <Route path="*" element={<Pagina404 />} />
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={rotas} />
  </StrictMode>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
