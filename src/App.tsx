import { useState } from "react";
import Header from "./components/Header";
import { Employee, initialState, appState } from "./models/Employee";
import EmployeeList from "./components/EmployeeList";
import EmployeeAdd from "./components/EmployeeAdd";

function App() {
  const [employeeList, setEmployeeList] = useState<Employee[]>(initialState);
  const [state, setState] = useState<appState>(appState.List);

  const addEmployee = (emp: Employee): void => {
    setEmployeeList([...employeeList, emp]);
  };

  const deleteEmployee = (data: Employee): void => {
    const idx = employeeList.indexOf(data);
    console.log(idx);
    if (idx !== -1) {
      const change = employeeList.splice(idx, 1);
      if (change.length === 0) {
        setEmployeeList(initialState);
      } else {
        setEmployeeList(change);
      }      
    }
  };

  const renderState = () => {
    switch (state) {
      case appState.List:
        return (
          <EmployeeList
            name="Employee List"
            employeeList={employeeList}
            deleteEmployee={deleteEmployee}
            setState={setState}
          />
        );
      case appState.Add:
        return (
          <EmployeeAdd
            name="Employee Add"
            setState={setState}
            addEmployee={addEmployee}
          />
        );
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col content-center">
      <div className="py-2">
        <Header message="React: Simple CRUD App" />
      </div>
      <div>{renderState()}</div>
    </div>
  );
}

export default App;
