import React, { useState } from "react";
import { Employee, initEmployee, appState } from "../models/Employee";

interface Props {
  name: string;
  setState: React.Dispatch<React.SetStateAction<appState>>;
  addEmployee: (emp: Employee) => void;
}

const EmployeeAdd = ({ name, setState, addEmployee }: Props): JSX.Element => {
  const [employee, setEmployee] = useState<Employee>(initEmployee);

  const handleBackToList = () => {
    setState(appState.List);
  };

  const handleForm = (e: React.FormEvent) => {
    e.preventDefault();
    addEmployee(employee);
    setEmployee(initEmployee);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value, id: Date.now().toString(36) });
  };

  return (
    <div className="flex flex-col">
      <div>
        <div className="flex flex-row justify-center py-8 px-12">
          <div className="flex-grow w-1/3"></div>
          <div className="flex-grow w-1/2">
            <h1 className="text-lg text-center font-bold ">{name}</h1>
          </div>
          <div className="flex flex-grow w-1/3 justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={(e) => handleBackToList()}
            >
              Back To List
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center px-12">
        <div className="w-full max-w-xs">
          <form
            onSubmit={handleForm}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                First Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First Name"
                value={employee.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last Name"
                value={employee.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="text"
                placeholder="Email"
                value={employee.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Employee
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployeeAdd;
