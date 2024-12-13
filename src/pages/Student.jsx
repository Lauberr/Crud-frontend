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
      <header className="p-4 flex w-full justify-between items-center bg-white">
        <NavLink to="/" className="ml-3 p-2 rounded text-white px-5">
          Voltar
        </NavLink>
        <strong className="text-2xl">Lista de Estudantes</strong>
        <button
          className="ml-3 p-2 rounded text-white px-5 bg-amber-500"
          onClick={() => {
            setEditingUser(null); // Reseta o modo de edição
            setShowModal(true);
          }}
        >
          NOVO ESTUDANTE
        </button>
      </header>

      <main className="p-8 py-4 bg-gray-100 w-full h-full">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-7 text-start">Nome</th>
              <th className="p-7 text-start">Email</th>
              <th className="p-7 text-start">Celular</th>
              <th className="p-7 text-start">Ações</th>
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
