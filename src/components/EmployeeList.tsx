import React from "react";
import { Employee, appState } from "../models/Employee";
import EmployeeItem from "./EmployeeItem";

interface Props {
  name: string;
  employeeList: Employee[];
  setState: React.Dispatch<React.SetStateAction<appState>>;
  deleteEmployee: (data: Employee) => void;
}

const EmployeeList = ({ name, employeeList, setState,deleteEmployee }: Props): JSX.Element => {
  const handlerBotton = () => {
    setState(appState.Add);
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
              onClick={(e) => handlerBotton()}
            >
              Add Employee
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center px-12">
        <table className="w-full border-collapse border border-blue-600">
          <thead>
            <tr>
              <th className="w-1 border border-blue-600">Id</th>
              <th className="w-1 border border-blue-600">First Name</th>
              <th className="w-1 border border-blue-600">Last Name</th>
              <th className="w-1 border border-blue-600">Email</th>
              <th className="w-1 border border-blue-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employeeList.length !== 0 ? (
              employeeList.map((e) => {
                return <EmployeeItem employee={e} key={e.id} deleteEmployee={deleteEmployee}/>;
              })
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="w-1 text-center font-bold border border-blue-600"
                >
                  No row to displays
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
