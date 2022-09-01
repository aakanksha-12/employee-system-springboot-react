import axios from "axios";
import { BASE_URL } from "./helper";

export const createEmployee = (employee) => {
  return axios.post(`${BASE_URL}/employees`, employee).then((response) => {
    return response.data;
  });
};

export const getOneEmployee = (empId) => {
  return axios.get(`${BASE_URL}/employees/${empId}`).then((response) => {
    return response.data;
  });
};

export const getAllEmployees = () => {
  return axios.get(`${BASE_URL}/employees`).then((response) => {
    return response.data;
  });
};

export const updateEmployee = (empId, employee) => {
  return axios
    .put(`${BASE_URL}/employees/${empId}`, employee)
    .then((response) => {
      return response.data;
    });
};

export const deleteEmployee = (empId) => {
  return axios.delete(`${BASE_URL}/employees/${empId}`).then((response) => {
    return response.data;
  });
};

// class EmployeeService {
//   saveEmployee(employee) {
//     return axios.post(EMPLOYEE_API_BASE_URL, employee);
//   }
// }

// export default new EmployeeService();
