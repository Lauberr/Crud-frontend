import React, { useEffect, useState } from "react";

export function Card() {

  const [users, setUsers] = useState([]); // Estado para armazenar os usuários
  const [loading, setLoading] = useState(true); // Estado para gerenciar o carregamento
  const [error, setError] = useState(null); // Estado para erros

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://crud-operations-backand.onrender.com/usuarios"); // URL do backend
        if (!response.ok) {
          throw new Error("Erro ao buscar os usuários");
        }
        const data = await response.json();
        setUsers(data); // Atualiza o estado com os usuários
      } catch (error) {
        setError(error.message); // Armazena a mensagem de erro
      } finally {
        setLoading(false); // Finaliza o estado de carregamento
      }
    };

    fetchUsers(); // Chama a função de busca
  }, []); // O array vazio faz com que a requisição ocorra apenas uma vez após a montagem

  if (loading) return <p className="text-center text-indigo-600">Carregando usuários...</p>; // Exibe o carregamento
  if (error) return <p className="text-center text-red-600">Erro: {error}</p>; // Exibe erro, se houver


  return (
    <div className="max-w-7xl mx-auto p-6">
      {users.length === 0 ? (
        <p className="text-center text-gray-500">Nenhum usuário encontrado.</p>
      ) : (
        <div className="flex flex-wrap gap-6">
         {users.map(user => (
            <tr 
              key={user.id}
              className="w-full bg-white p-3 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            >
              <td>{user.nome}</td>
              <td>{user.email}</td>
              <td>{user.celular}</td>
              <td>{user.id}</td>
              <td>{user.data_de_admissão}</td>
              editar
              excluir
            </tr>
          ))}
        </div>


        // <div className="flex flex-wrap gap-6">
        //   {users.map(user => (
        //     <div
        //       key={user.id}
        //       className="w-full bg-white p-3 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
        //     >
        //       <h2 className="text-2xl font-semibold text-indigo-700">{user.nome}</h2>
        //       <p className="text-gray-600 mt-2">
        //         <strong>Email:</strong> {user.email}
        //       </p>
        //       <p className="text-gray-600 mt-2">
        //         <strong>Celular:</strong> {user.celular}
        //       </p>
        //     </div>
        //   ))}
        // </div>
      )}
    </div>
  );
};
