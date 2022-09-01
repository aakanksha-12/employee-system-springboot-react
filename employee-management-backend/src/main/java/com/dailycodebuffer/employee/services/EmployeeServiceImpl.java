package com.dailycodebuffer.employee.services;

import com.dailycodebuffer.employee.entity.EmployeeEntity;
import com.dailycodebuffer.employee.exception.ResourceNotFoundException;
import com.dailycodebuffer.employee.model.Employee;
import com.dailycodebuffer.employee.repository.EmployeeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepository;

	@Override
	public Employee createEmployee(Employee employee) {
		EmployeeEntity employeeEntity = new EmployeeEntity();

		BeanUtils.copyProperties(employee, employeeEntity);
		EmployeeEntity savedEmployeeEntity = employeeRepository.save(employeeEntity);
		BeanUtils.copyProperties(savedEmployeeEntity, employee);

		return employee;
	}

	@Override
	public List<Employee> getAllEmployees() {
		List<EmployeeEntity> employeeEntities = employeeRepository.findAll();

		List<Employee> employees = employeeEntities.stream()
				.map(emp -> new Employee(emp.getId(), emp.getFirstName(), emp.getLastName(), emp.getEmailId()))
				.collect(Collectors.toList());
		return employees;
	}

	@Override
	public boolean deleteEmployee(Long id) {
		EmployeeEntity employee = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee", "ID", String.valueOf(id)));
		
		employeeRepository.delete(employee);
		return true;
	}

	@Override
	public Employee getEmployeeById(Long id) {
		EmployeeEntity employeeEntity = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee", "ID", String.valueOf(id)));

		Employee employee = new Employee();
		BeanUtils.copyProperties(employeeEntity, employee);
		return employee;
	}

	@Override
	public Employee updateEmployee(Long id, Employee employee) {
		EmployeeEntity employeeEntity = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee", "ID", String.valueOf(id)));

		employeeEntity.setEmailId(employee.getEmailId());
		employeeEntity.setFirstName(employee.getFirstName());
		employeeEntity.setLastName(employee.getLastName());

		EmployeeEntity updatedEmployee = employeeRepository.save(employeeEntity);
		BeanUtils.copyProperties(updatedEmployee, employee);
		return employee;
	}
}
