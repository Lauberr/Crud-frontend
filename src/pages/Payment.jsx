import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export function Payment() {
    const [payments, setPayments] = useState([]);  // Estado para armazenar os pagamentos
    const [loading, setLoading] = useState(true);  // Estado de carregamento
    const [error, setError] = useState(null);      // Estado de erro

    useEffect(() => {
        const fetchPayments = async () => {
            try {
                const response = await fetch(
                    "https://crud-operations-backand.onrender.com/usuarios" // URL 
                );
                if (!response.ok) {
                    throw new Error("Erro ao buscar os dados de pagamento");
                }
                const data = await response.json();
                setPayments(data); // Atualiza o estado com os dados dos pagamentos
            } catch (error) {
                setError(error.message); // Em caso de erro, atualiza o estado de erro
            } finally {
                setLoading(false); // Após carregar ou erro, atualiza o estado de loading
            }
        };

        fetchPayments();
    }, []);

    if (loading) {
        return <p className="text-center text-indigo-600">Carregando dados de pagamento...</p>;
    }

    if (error) {
        return <p className="text-center text-red-600">Erro: {error}</p>;
    }

    return (
        <div className="overflow-hidden h-full w-full min-h-screen bg-gray-50">

            {/* Cabeçalho */}
            <header className="p-4 flex w-full justify-between items-center bg-white">

                {/* Botão Voltar */}
                <NavLink to="/" className="ml-3 p-2 rounded text-white px-5">
                    <svg width="25" height="25" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.7188 9C17.7188 4.18359 13.8164 0.28125 9 0.28125C4.18359 0.28125 0.28125 4.18359 0.28125 9C0.28125 13.8164 4.18359 17.7187 9 17.7188C13.8164 17.7188 17.7187 13.8164 17.7188 9ZM9 16.5938C4.82695 16.5938 1.40625 13.2152 1.40625 9C1.40625 4.82695 4.78477 1.40625 9 1.40625C13.173 1.40625 16.5938 4.78477 16.5938 9C16.5938 13.173 13.2152 16.5938 9 16.5938ZM10.125 12.375L6.75 9L10.125 5.625L10.125 12.375ZM11.25 5.625C11.25 4.62656 10.0371 4.12031 9.33047 4.83047L5.95547 8.20547C5.51602 8.64492 5.51602 9.35859 5.95547 9.79805L9.33047 13.173C10.0371 13.8797 11.25 13.3805 11.25 12.3785L11.25 5.625Z" fill="#C4C4C4" />
                    </svg>
                </NavLink>

                {/* Barra de Pesquisa */}
                <div className="relative w-full max-w-sm flex items-center space-x-4 mr-12">
                    <div className="relative w-full max-w-sm">
                        <input
                            type="text"
                            className="w-full h-11 px-4 py-2 pl-4 pr-10 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Pesquisar..."
                        />
                    </div>
                </div>
            </header>

            {/* Corpo principal */}
            <main className="p-8 py-4 bg-gray-100 w-full h-full">
                <div className="border-b pb-4 w-full flex justify-between">
                    <strong className="text-2xl p-2">Lista de Pagamentos</strong>
                </div>

                <table className="w-full">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-7 text-start">Nome</th>
                            <th className="p-7 text-start">Email</th>
                            <th className="p-7 text-start">Celular</th>
                            <th className="p-7 text-start">Data de Admissão</th>
                            <th className="p-7 text-start">Número da Conta</th>
                            <th className="p-7 text-start">Quantidade Paga</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.length === 0 ? (
                            <tr>
                                <td colSpan="6" className="text-center text-gray-500">
                                    Nenhum pagamento encontrado.
                                </td>
                            </tr>
                        ) : (
                            payments.map((payment) => (
                                <tr key={payment.id}>
                                    <td className="p-4">{payment.nome}</td>
                                    <td className="p-4">{payment.email}</td>
                                    <td className="p-4">{payment.celular}</td>
                                    <td className="p-4">{payment.data_de_admissao}</td>
                                    <td className="p-4">{payment.numero_da_conta}</td>
                                    <td className="p-4">{payment.quantidade_paga}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </main>
        </div>
    );
}
