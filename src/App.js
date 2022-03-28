import React, { useState } from 'react';
import UserTable from './tables/UserTable'

const App = () => {
  const usersData = [
    { id: 1, name: 'Ariene', username: 'floppydiskette' },
    { id: 2, name: 'Gabriel', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  ]

  const [users, setUsers] = useState(usersData)


  return (
    <div className="container">
      <h1>CRUD App com Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Adicionar usuário</h2>
        </div>
        <div className="flex-large">
          <h2>Lista de usuários</h2>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  );
}


export default App;