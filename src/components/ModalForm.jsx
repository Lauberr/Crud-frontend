import React, { useState } from "react";

export function ModalForm({ show, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    celular: "",
    data_de_admissao: "",
  });

  // Atualiza os valores do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Lida com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Passa os dados para a função pai
    setFormData({ nome: "", email: "", celular: "", data_de_admissao: "" }); // Reseta o formulário
    onClose(); // Fecha o modal
  };

  const handleEditStudent = async (id, updatedData) => {
    try {
      const response = await fetch(`https://crud-operations-backand.onrender.com/usuarios/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });
  
      if (!response.ok) {
        throw new Error("Erro ao atualizar estudante");
      }
  
      const updatedStudent = await response.json();
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === id ? updatedStudent : user))
      ); // Atualiza a lista localmente
    } catch (error) {
      console.error("Erro ao atualizar estudante:", error.message);
    }
  };

  const handleDeleteStudent = async (id) => {
    try {
      const response = await fetch(`https://crud-operations-backand.onrender.com/usuarios/${id}`, {
        method: "DELETE",
      });
  
      if (!response.ok) {
        throw new Error("Erro ao excluir estudante");
      }
  
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id)); // Remove localmente
    } catch (error) {
      console.error("Erro ao excluir estudante:", error.message);
    }
  };
  

  if (!show) return null; // Não renderiza nada se o modal não estiver visível

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Novo Estudante</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium">Nome</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Celular</label>
            <input
              type="tel"
              name="celular"
              value={formData.celular}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Data de Admissão</label>
            <input
              type="date"
              name="data_de_admissao"
              value={formData.data_de_admissao}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 rounded"
              onClick={onClose} // Fecha o modal
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
