import React, { createContext, useContext, useState } from "react";

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await fetch(
        "https://crud-operations-backand.onrender.com/usuarios"
      );
      if (!response.ok) throw new Error("Erro ao buscar os estudantes");
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const addStudent = async (newStudent) => {
    try {
      const response = await fetch("https://crud-operations-backand.onrender.com/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newStudent),
      });
      if (!response.ok) throw new Error("Erro ao adicionar estudante");
      const addedStudent = await response.json();
      setStudents((prev) => [...prev, addedStudent]);
    } catch (error) {
      console.error(error.message);
    }
  };

  const editStudent = async (id, updatedData) => {
    try {
      const response = await fetch(`https://crud-operations-backand.onrender.com/usuarios/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });
      if (!response.ok) throw new Error("Erro ao atualizar estudante");
      const updatedStudent = await response.json();
      setStudents((prev) =>
        prev.map((student) => (student.id === id ? updatedStudent : student))
      );
    } catch (error) {
      console.error(error.message);
    }
  };

  const deleteStudent = async (id) => {
    try {
      const response = await fetch(`https://crud-operations-backand.onrender.com/usuarios/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Erro ao excluir estudante");
      setStudents((prev) => prev.filter((student) => student.id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <StudentContext.Provider
      value={{ students, fetchStudents, addStudent, editStudent, deleteStudent }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export const useStudentContext = () => useContext(StudentContext);
