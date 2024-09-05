import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { getUsers, setFilter } from '../features/userSlice';

const UserTable: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const users = useSelector((state: RootState) => state.users.filteredUsers);
    const filter = useSelector((state: RootState) => state.users.filter);
  
    useEffect(() => {
      dispatch(getUsers());
    }, [dispatch]);
  
    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setFilter({
        ...filter,
        [e.target.name]: e.target.value,
      }));
    };
  
    return (
      <div className="p-2 sm:p-4">
        {/* Filtry */}
        <div className="mb-4 flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
          {['name', 'username', 'email', 'phone'].map((key) => (
            <input
              key={key}
              name={key}
              value={filter[key as keyof typeof filter]}
              onChange={handleFilterChange}
              placeholder={`Filter by ${key}`}
              className="border p-1 sm:p-2 flex-1 rounded-md text-xs md:text-sm lg:text-base w-full"
            />
          ))}
        </div>
  
        {/* Tabela na większych ekranach */}
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 table-auto text-xs md:text-sm lg:text-base">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 sm:px-6 py-2 sm:py-3 text-left font-medium text-gray-500 uppercase tracking-wider text-xslg:text-base">Name</th>
                <th className="px-4 sm:px-6 py-2 sm:py-3 text-left font-medium text-gray-500 uppercase tracking-wider text-xs md:text-sm lg:text-base">Username</th>
                <th className="px-4 sm:px-6 py-2 sm:py-3 text-left font-medium text-gray-500 uppercase tracking-wider text-xs md:text-sm lg:text-base">Email</th>
                <th className="px-4 sm:px-6 py-2 sm:py-3 text-left font-medium text-gray-500 uppercase tracking-wider text-xs md:text-sm lg:text-base">Phone</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map(user => (
                <tr key={user.id}>
                  <td className="py-2 sm:py-4 whitespace-nowrap text-xs lg:text-base">{user.name}</td>
                  <td className=" py-2 sm:py-4 whitespace-nowrap text-xs  lg:text-base">{user.username}</td>
                  <td className="  py-2 sm:py-4 whitespace-nowrap text-xs lg:text-base">{user.email}</td>
                  <td className=" py-2 sm:py-4 whitespace-nowrap text-xs  lg:text-base">{user.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        {/* Widok mobilny */}
        <div className="block md:hidden">
          {users.map(user => (
            <div key={user.id} className="bg-white shadow overflow-hidden sm:rounded-lg mb-4 p-2 sm:p-4">
              <div className="grid grid-cols-2 gap-2 sm:gap-4 text-xs  lg:text-base">
                <div>
                  <strong>Name:</strong>
                  <p>{user.name}</p>
                </div>
                <div>
                  <strong>Username:</strong>
                  <p>{user.username}</p>
                </div>
                <div>
                  <strong>Email:</strong>
                  <p>{user.email}</p>
                </div>
                <div>
                  <strong>Phone:</strong>
                  <p>{user.phone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  
  
  

export default UserTable;
