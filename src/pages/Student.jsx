import { Card } from "../components/Card";
import React, { useEffect, useState } from "react";
import { ModalForm } from "../components/ModalForm"; // Importe o ModalForm
import { NavLink } from "react-router-dom";


export function Student() {
  const [users, setUsers] = useState([]); // Estado para armazenar os usuários
  const [loading, setLoading] = useState(true); // Estado para gerenciar o carregamento
  const [error, setError] = useState(null); // Estado para erros
  const [showModal, setShowModal] = useState(false); // Estado para exibir o modal
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://crud-operations-backand.onrender.com/usuarios"
        );
        if (!response.ok) {
          throw new Error("Erro ao buscar os usuários");
        }
        const data = await response.json();
        setUsers(data); // Atualiza o estado com os usuários
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading)
    return <p className="text-center text-indigo-600">Carregando usuários...</p>;
  if (error)
    return <p className="text-center text-red-600">Erro: {error}</p>;

  // Função chamada ao enviar o formulário
  const handleAddStudent = async (newStudent) => {
    try {
      const response = await fetch("https://crud-operations-backand.onrender.com/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newStudent),
      });
  
      if (!response.ok) {
        throw new Error("Erro ao adicionar estudante");
      }
  
      const addedStudent = await response.json();
      setUsers((prevUsers) => [...prevUsers, addedStudent]); // Adiciona o estudante à lista
    } catch (error) {
      console.error("Erro ao adicionar estudante:", error.message);
    }
  };
  

  return (
    <div className="w-full h-full overflow-hidden">
      <header className="p-6 flex w-full justify-between">
        <div className="w-full flex justify-between">

          <NavLink to="/" className="ml-3 p-2 rounded text-white px-5">
                <svg width="25" height="25" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.7188 9C17.7188 4.18359 13.8164 0.28125 9 0.28125C4.18359 0.28125 0.28125 4.18359 0.28125 9C0.28125 13.8164 4.18359 17.7187 9 17.7188C13.8164 17.7188 17.7187 13.8164 17.7188 9ZM9 16.5938C4.82695 16.5938 1.40625 13.2152 1.40625 9C1.40625 4.82695 4.78477 1.40625 9 1.40625C13.173 1.40625 16.5938 4.78477 16.5938 9C16.5938 13.173 13.2152 16.5938 9 16.5938ZM10.125 12.375L6.75 9L10.125 5.625L10.125 12.375ZM11.25 5.625C11.25 4.62656 10.0371 4.12031 9.33047 4.83047L5.95547 8.20547C5.51602 8.64492 5.51602 9.35859 5.95547 9.79805L9.33047 13.173C10.0371 13.8797 11.25 13.3805 11.25 12.3785L11.25 5.625Z" fill="#C4C4C4" />
                </svg> 
          </NavLink>

          <div className="flex">
            <input
              className="mr-4 py-2 px-3 border rounded-md"
              type="search"
              placeholder="Pesquisa..."
            />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="30px" fill="#CCCCCC"><path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg>
          </div>
        </div>
      </header>

      <main className="p-8 py-4 bg-gray-100 w-full h-full">
      <div className="border-b pb-4 w-full flex justify-between">
          <strong className="text-2xl">Lista de Estudantes</strong>
          <button
            className="ml-3 p-2 rounded text-white px-5 bg-yellow-400"
            onClick={() => setShowModal(true)}
          >
            NOVO ESTUDANTE
          </button>
        </div> 

        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-7 text-start">Nome</th>
              <th className="p-7 text-start">Email</th>
              <th className="p-7 text-start">Celular</th>
              <th className="p-7 text-start">Cadastro</th>
              <th className="p-7 text-start">Data de Admissão</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center text-gray-500">
                  Nenhum usuário encontrado.
                </td>
              </tr>
            ) : (
              users.map((user) => <Card key={user.id} user={user} />)
            )}
          </tbody>
        </table>
      </main>

      {/* Modal */}
      <ModalForm
        show={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleAddStudent}
      />
    </div>
  );
}
