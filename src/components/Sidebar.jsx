import { NavLink } from "react-router-dom";

export function Sidebar() {
  const getEstilo = (props) => {
    let estilo = `
      flex items-center gap-3
      px-3 py-2 w-full
      text-sm text-white 
      hover:bg-zinc-900 `;
    let ativo = "border-r-4 border-solid border-slate-800 ";

    let final = props.isActive ? estilo + ativo : estilo;

    return final;
  };

  return (
    <aside className="flex flex-col gap-5 bg-black min-w-72">
      <header
        className={`
          flex justify-center items-center gap-2
          bg-black text-zinc-50 
          px-1 py-5 h-16          
          text-2xl font-black
        `}
      >
        <span className="font-bold">CRUD OPERATIONS</span>
      </header>

      <nav
        className={`
          flex flex-col justify-start items-start gap-2    
               
        `}
      >
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

      
    </aside>
  );
}
