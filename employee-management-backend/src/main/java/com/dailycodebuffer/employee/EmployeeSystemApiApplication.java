package com.dailycodebuffer.employee;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EmployeeSystemApiApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(EmployeeSystemApiApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("Project started...");
	}

}
