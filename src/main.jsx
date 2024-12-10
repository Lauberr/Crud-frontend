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
    <Route path="/" element={<LoginPage />}>
      <Route index element={<LoginPage />} />
      <Route path="home" element={<Home />} />
      <Route path="payment" element={<Payment />} />
      <Route path="student" element={<Student/>} />
      <Route path="*" element={<Pagina404 />} />
    </Route>
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
