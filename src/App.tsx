import React from 'react';
import UserTable from './components/userTable';

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <UserTable />
    </div>
  );
};

export default App;