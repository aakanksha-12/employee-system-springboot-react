import React from "react";
import { useNavigate } from "react-router-dom";

const Employee = ({ employee, deleteEmp }) => {

    const navigate = useNavigate();
    const editEmployee = (e,id) => {
        e.preventDefault();
        console.log(id);
        navigate(`/edit-emp/${id}`)
    }
  return (
    <tr key={employee.id}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{employee.firstName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{employee.lastName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{employee.emailId}</div>
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
        <a
          onClick={(e, id) => editEmployee(e, employee.id)}
          className="text-indigo-600 hover:text-indigo-900 px-4 hover:cursor-pointer"
        >
          Edit
        </a>
        <a
          onClick={(e) => deleteEmp(e, employee.id)}
          className="text-indigo-600 hover:text-indigo-900 hover:cursor-pointer"
        >
          Delete
        </a>
      </td>
    </tr>
  );
};

export default Employee;
