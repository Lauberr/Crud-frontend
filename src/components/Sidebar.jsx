import { NavLink } from "react-router-dom";
import xandis from "../assets/xandis.jpg"

export function Sidebar() {
  const getEstilo = (props) => {
    let estilo = `
      flex items-center  justify-center 
      gap-3 py-2 w-full
      rounded
      text-sm text-black 
      hover:bg-zinc-400 
    `;
    let ativo = "bg-yellow-400 ";
    let final = props.isActive ? estilo + ativo : estilo;

    return final;
  };

  return (
    <aside className="flex flex-col gap-5 bg-red-100 min-w-72 w-2/12 items-center">
      <div className={`flex justify-center items-center gap-2 bg-red-100 text-black px-1 py-5 h-16 text-2xl font-black`}>
        <span className="border-l-yellow-400 border-l-4 px-2">CRUD OPERATIONS</span>
      </div>

      <div className="mb-20 flex flex-col bg-red-100 min-w-72 w-2/12 items-center">
        <img src={xandis} alt="picture" className=" w-1/2 rounded-full"/>
        <strong className="w-full text-center mt-3">Xandis</strong>
        <p className="text-orange-400 text-sm ">Admin</p>
      </div>

      <nav className={`flex flex-col justify-start items-center gap-2 w-3/4`}>
        <NavLink to="home" className={getEstilo}>
          Home
        </NavLink>
        <NavLink to="payment" className={getEstilo}>
          Payment
        </NavLink>
        <NavLink to="student" className={getEstilo}>
          Student
        </NavLink>
      </nav>
      {/* <footer className="justify-end">
        Logout
      </footer> */}
    </aside>
  );
}
