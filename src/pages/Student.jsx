import { Card } from "../components/Card";
import React, { useEffect, useState } from "react";
import { ModalForm } from "../components/ModalForm"; // Importe o ModalForm

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
        <strong className="text-2xl">Lista de Estudantes</strong>
        <button
          className="ml-3 p-2 rounded text-white px-5 bg-yellow-400"
          onClick={() => setShowModal(true)}
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
