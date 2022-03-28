import React from 'react';

const UserTable = () => (
    <table>
        <thead>
            <th>Nome</th>
            <th>Usuário</th>
            <th>Ações</th>
        </thead>
        <tbody>
            <tr>
                <td>Dados do nome</td>
                <td>Dados do usuário</td>
                <td>
                    <button className="button muted-button">Editar</button>
                    <button className="button muted-button">Excluir</button>
                </td>
            </tr>
        </tbody>
    </table>
)

export default UserTable;