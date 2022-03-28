import React from 'react';
import UserTable from './tables/UserTable'

const App = () => {
  return (
    <div className="container">
      <h1>CRUD App com Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Adicionar usuário</h2>
        </div>
        <div className="flex-large">
          <h2>Lista de usuários</h2>
          <UserTable />
        </div>
      </div>
    </div>
  );
}


export default App;