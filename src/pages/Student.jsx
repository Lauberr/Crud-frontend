import { Card } from "../components/Card";
import React, { useEffect, useState } from "react";
import { ModalForm } from "../components/ModalForm"; // ModalForm reutilizado para adicionar/editar
import { NavLink } from "react-router-dom";

export function Student() {
  const [users, setUsers] = useState([]); // Estado para armazenar os usuários
  const [loading, setLoading] = useState(true); // Estado para gerenciar o carregamento
  const [error, setError] = useState(null); // Estado para erros
  const [showModal, setShowModal] = useState(false); // Estado para exibir o modal
  const [editingUser, setEditingUser] = useState(null); // Estado para armazenar o usuário sendo editado

  // Buscar usuários no backend
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://crud-operations-backand.onrender.com/usuarios");
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

  // Função chamada ao enviar o formulário para adicionar ou editar
  const handleSaveStudent = async (student) => {
    try {
      const method = editingUser ? "PUT" : "POST";
      const url = editingUser
        ? `https://crud-operations-backand.onrender.com/usuarios/${editingUser.id}`
        : "https://crud-operations-backand.onrender.com/usuarios";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
      });

      if (!response.ok) {
        throw new Error("Erro ao salvar estudante");
      }

      const updatedStudent = await response.json();

      if (editingUser) {
        // Atualiza a lista localmente
        setUsers((prevUsers) =>
          prevUsers.map((user) => (user.id === editingUser.id ? updatedStudent : user))
        );
      } else {
        // Adiciona o novo estudante
        setUsers((prevUsers) => [...prevUsers, updatedStudent]);
      }

      setShowModal(false);
      setEditingUser(null); // Limpa o estado de edição
    } catch (error) {
      console.error("Erro ao salvar estudante:", error.message);
    }
  };

  // Função para apagar um estudante
  const handleDeleteStudent = async (id) => {
    try {
      const response = await fetch(`https://crud-operations-backand.onrender.com/usuarios/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Erro ao apagar estudante");
      }

      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id)); // Remove localmente
    } catch (error) {
      console.error("Erro ao apagar estudante:", error.message);
    }
  };

  // Abrir modal para edição
  const handleEditStudent = (user) => {
    setEditingUser(user);
    setShowModal(true);
  };

  if (loading) return <p className="text-center text-indigo-600">Carregando usuários...</p>;
  if (error) return <p className="text-center text-red-600">Erro: {error}</p>;

  return (
    <div className="w-full h-full overflow-hidden">

      {/* Cabeçalho */}
      <header className="p-4 flex flex-wrap w-full justify-between items-center bg-white">

        {/* Botão Voltar */}
        <NavLink to="/" className="ml-3 p-2 rounded text-white px-5">
          <svg width="25" height="25" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.7188 9C17.7188 4.18359 13.8164 0.28125 9 0.28125C4.18359 0.28125 0.28125 4.18359 0.28125 9C0.28125 13.8164 4.18359 17.7187 9 17.7188C13.8164 17.7188 17.7187 13.8164 17.7188 9ZM9 16.5938C4.82695 16.5938 1.40625 13.2152 1.40625 9C1.40625 4.82695 4.78477 1.40625 9 1.40625C13.173 1.40625 16.5938 4.78477 16.5938 9C16.5938 13.173 13.2152 16.5938 9 16.5938ZM10.125 12.375L6.75 9L10.125 5.625L10.125 12.375ZM11.25 5.625C11.25 4.62656 10.0371 4.12031 9.33047 4.83047L5.95547 8.20547C5.51602 8.64492 5.51602 9.35859 5.95547 9.79805L9.33047 13.173C10.0371 13.8797 11.25 13.3805 11.25 12.3785L11.25 5.625Z" fill="#C4C4C4" />
          </svg>
        </NavLink>

        {/*    */}

        <div className="relative w-full max-w-sm flex items-center space-x-4 mr-12">

          {/* Barra de Pesquisa */}
          <div className="relative w-full max-w-sm">
            <input
              type="text"
              className="w-full h-11 px-4 py-2 pl-4 pr-10 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Pesquisar..."
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                width="16"
                height="16"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-400"
              >
                <g clip-path="url(#clip0_17_45)">
                  <path
                    d="M13.9043 13.1687L10.377 9.64141C10.3141 9.57852 10.232 9.5457 10.1445 9.5457H9.86289C10.8008 8.53125 11.375 7.17773 11.375 5.6875C11.375 2.5457 8.8293 0 5.6875 0C2.5457 0 0 2.5457 0 5.6875C0 8.8293 2.5457 11.375 5.6875 11.375C7.17773 11.375 8.53125 10.8008 9.5457 9.86562V10.1445C9.5457 10.232 9.58125 10.3141 9.64141 10.377L13.1687 13.9043C13.2973 14.0328 13.5051 14.0328 13.6336 13.9043L13.9043 13.6336C14.0328 13.5051 14.0328 13.2973 13.9043 13.1687ZM5.6875 10.5C3.02695 10.5 0.875 8.34805 0.875 5.6875C0.875 3.02695 3.02695 0.875 5.6875 0.875C8.34805 0.875 10.5 3.02695 10.5 5.6875C10.5 8.34805 8.34805 10.5 5.6875 10.5Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_17_45">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          {/* Botão de Notificação */}
          <button className="p-2 rounded text-gray-500 hover:bg-gray-100">
            <svg width="23" height="26" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_17_40)">
                <path d="M8.5003 18.75C9.17044 18.75 9.71459 18.1883 9.71459 17.4988H10.9289C10.9289 18.8781 9.83905 20 8.5003 20C7.16155 20 6.07173 18.8781 6.07173 17.4988H7.28602C7.28602 18.1883 7.83017 18.75 8.5003 18.75ZM0.555079 13.0785C1.61606 12.0387 2.42735 10.9504 2.42735 7.26172C2.42735 4.15273 4.83278 1.61719 7.89316 1.31055V0.625C7.89316 0.279687 8.16486 0 8.5003 0C8.83575 0 9.10745 0.279687 9.10745 0.625V1.31094C12.1678 1.61758 14.5733 4.15273 14.5733 7.26172C14.5733 10.95 15.3849 12.0387 16.4459 13.0785C16.976 13.598 17.1434 14.3836 16.8728 15.0797C16.5966 15.7906 15.9317 16.25 15.1789 16.25H1.82173C1.06887 16.25 0.404051 15.7902 0.1278 15.0793C-0.142757 14.3832 0.0249653 13.598 0.555079 13.0785ZM1.82173 15H15.1789C15.7189 15 15.9887 14.3566 15.6084 13.984C14.2856 12.6875 13.359 11.2363 13.359 7.26211C13.359 4.63008 11.1858 2.5 8.5003 2.5C5.81521 2.5 3.64164 4.62969 3.64164 7.26172C3.64164 11.2207 2.72296 12.6797 1.39218 13.9836C1.01044 14.3582 1.28403 15 1.82173 15Z" fill="#C4C4C4" />
              </g>
              <defs>
                <clipPath id="clip0_17_40">
                  <rect width="17" height="20" fill="white" transform="matrix(-1 0 0 1 17 0)" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </header>
      <main className="p-8 py-4 bg-gray-100 w-full h-full">
        <div className="border-b pb-4 w-full flex justify-between">
          <strong className="text-2xl p-2">Lista de Estudantes</strong>
          <button
            className="ml-3 p-2 rounded text-white px-5 bg-amber-500"
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
              {/* <th className="p-7 text-start">Ações</th> */}
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center text-gray-500">
                  Nenhum usuário encontrado.
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <Card
                  key={user.id}
                  user={user}
                  onEdit={() => handleEditStudent(user)}
                  onDelete={() => handleDeleteStudent(user.id)}
                />
              ))
            )}
          </tbody>
        </table>
      </main>

      {/* Modal para adicionar/editar */}
      <ModalForm
        show={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleSaveStudent}
        initialData={editingUser} // Dados iniciais para o modo de edição
      />
    </div>
  );
}
