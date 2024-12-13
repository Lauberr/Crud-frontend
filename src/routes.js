import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
  } from "react-router-dom";
  import { Home } from "./pages/Home";
  import { Student } from "./pages/Student";
  import { Pagina404 } from "./pages/Pagina404";
  import { Layout } from "./pages/Layout";
  import { LoginPage } from "./pages/LoginPage";
  
  export const rotas = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<LoginPage />} />
        <Route path="/" element={<Layout showSidebar={true} />}>
          <Route path="home" element={<Home />} />
          <Route path="student" element={<Student />} />
        </Route>
        <Route path="*" element={<Pagina404 />} />
      </>
    )
  );
  