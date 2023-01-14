import React from "react";
import { Employee } from "../models/Employee";

interface Props {
  name?: string;
  employee: Employee;
  deleteEmployee: (data: Employee) => void;
}

const EmployeeItem = ({ employee, deleteEmployee }: Props): JSX.Element => {
  const { id, firstName, lastName, email } = employee;

  return (
    <tr>
      <td className="w-1 text-center border border-blue-600">{id}</td>
      <td className="w-1 text-center border border-blue-600">{firstName}</td>
      <td className="w-1 text-center border border-blue-600">{lastName}</td>
      <td className="w-1 text-center border border-blue-600">{email}</td>
      <td className="w-1 text-center border border-blue-600 px-12">
        <div className="flex flex-row gap-4 w-full content-center">
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={(e) => deleteEmployee(id)}
            >
              View
            </button>
          </div>
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={(e) => deleteEmployee(id)}
            >
              Edit
            </button>
          </div>
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={(e) => deleteEmployee(employee)}
            >
              Delete
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default EmployeeItem;
