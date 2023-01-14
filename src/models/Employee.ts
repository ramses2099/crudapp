export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export const initialState: Employee[] = [
  
];

export const initEmployee = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
};

export enum appState {
  Add = 1,
  Edit,
  Delete,
  Up,
  List,
}
