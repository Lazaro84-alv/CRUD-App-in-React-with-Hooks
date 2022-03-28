import React from 'react'

const UserTable = (props) => (
    <table>
        <thead>
            <th>Nome</th>
            <th>Usuário</th>
            <th>Ações</th>
        </thead>
        <tbody>
            {props.users.length > 0 ? (
                props.users.map((user) => (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>
                    <button className="button muted-button">Edit</button>
                    <button className="button muted-button">Delete</button>
                    </td>
                </tr>
                ))
            ) : (
                <tr>
                <td colSpan={3}>No users</td>
                </tr>
            )}
        </tbody>
    </table>
)

export default UserTable