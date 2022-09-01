import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { deleteEmployee, getAllEmployees } from "../services/EmployeeService";
import Employee from "./Employee";

const GetEmployees = () => {
  const navigate = useNavigate();

  const navigateToAddEmp = () => {
    navigate("/add-emp");
  };

  const [employees, setEmployees] = useState(null);

  useEffect(() => {
    getAllEmployees()
      .then((data) => {
        setEmployees(data);
        toast.success("Employees details loaded successfully", {
          position: "top-right",
        });
        console.log(data);
      })
      .catch((error) => {
        toast.error("Failed to get employees details", {
          position: "top-right",
        });
      });
  }, []);

  const deleteEmp = (e, id) => {
    e.preventDefault();
    deleteEmployee(id).then((res) => {
      console.log("inside delete success");
      if (employees) {
        setEmployees((prevElement) => {
          return prevElement.filter((employee) => employee.id !== id);
        });
      }
    }).catch((error)=>{
      console.log(error);
    });
  };

  return (
    <div className="container mx-auto my-8">
      <div className="h-12">
        <button
          onClick={navigateToAddEmp}
          className="rounded bg-slate-600 text-white px-6 py-2 font-semibold mx-4"
        >
          Add Employee
        </button>
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium tracking-wider py-3 px-6">
                First Name
              </th>
              <th className="text-left font-medium tracking-wider py-3 px-6">
                Last Name
              </th>
              <th className="text-left font-medium tracking-wider py-3 px-6">
                Email
              </th>
              <th className="text-right font-medium tracking-wider py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>

          {employees && (
            <tbody className="bg-white">
              {employees.map((employee) => (
                <Employee
                  employee={employee}
                  deleteEmp={deleteEmp}
                  key={employee.id}
                />
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default GetEmployees;
