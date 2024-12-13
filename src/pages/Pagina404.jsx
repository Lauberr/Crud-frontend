import { NavLink } from "react-router-dom";


export function Pagina404() {
  return (
    <div className="h-screen w-screen">
      <div className="w-full h-1/3 flex flex-wrap justify-center ">
        <p className="text-gray-400 text-9xl">404 :&#40;</p>
      </div>

      <div className="bg-gray-400 h-2/3 w-full flex flex-wrap justify-center text-center ">
        <h1 className="text-6xl w-full h-30">Página não encontrada</h1>
        <svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 -960 960 960" width="100px" fill="#5f6368"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
        <p className="w-full text-lg">O URL solicitado não pode ser encontrado, têm certeza que o escreveu certo?</p>

        <NavLink to="/" className="bg-gray-800 text-white rounded-2xl h-10 flex flex-wrap justify-center items-center w-56">


          <div>Voltar para Página de Login</div>
        </NavLink>
      </div>


    </div>
  )

}