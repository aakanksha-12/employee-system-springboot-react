package com.dailycodebuffer.employee.model;

import javax.validation.constraints.NotEmpty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Employee {
    private long id;
    
    @NotEmpty(message = "First name should not be empty")
    private String firstName;
    
    @NotEmpty(message = "Last name should not be empty")
    private String lastName;
    
    @NotEmpty(message = "Email field should not be empty")
    private String emailId;
}
