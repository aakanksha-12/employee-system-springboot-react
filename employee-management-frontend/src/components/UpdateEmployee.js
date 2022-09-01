import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getOneEmployee, updateEmployee } from "../services/EmployeeService";

const UpdateEmployee = () => {

  const { id } = useParams("id");
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    id: id,
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  useEffect(() => {
    getOneEmployee(id)
      .then((data) => {
        // console.log(data);
        setEmployee(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const updateEmp = (e) => {
    e.preventDefault();

    updateEmployee(employee.id, employee).then((result) => {
        // console.log(result);
        toast.success("Employee updated successfully.", {
            position: 'top-right'
        });
        navigate("/")
    }).catch((err) => {
        console.log(err);
    })
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow bottom-b mt-5">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Update Employee</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={(e) => handleChange(e)}
            className="h1-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>

        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={(e) => handleChange(e)}
            className="h1-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>

        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Email
          </label>
          <input
            type="email"
            name="emailId"
            value={employee.emailId}
            onChange={(e) => handleChange(e)}
            className="h1-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>

        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={updateEmp}
            className="rounded text-white font-semibold bg-green-500 py-2 px-6 hover:bg-green-700"
          >
            Update
          </button>

          <button
            type="reset"
            className="rounded text-white font-semibold bg-red-500 py-2 px-6 hover:bg-red-700"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmployee;
