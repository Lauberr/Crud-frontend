export function Card({ user }) {
  return (
    <tr className="bg-white border-b-8 border-gray-100 hover:bg-yellow-200 transition-colors duration-100">
      <td className="p-7">{user.nome}</td>
      <td className="p-7">{user.email}</td>
      <td className="p-7">{user.celular}</td>
      <td className="p-7">{user.id}</td>
      <td className="p-7">{user.data_de_admissao}</td>
      <td className="p-7">editar</td>
      <td className="p-7">apagar</td>
    </tr>
  );
}
