package com.example.springclient;

import com.example.springclient.model.Employee;
import com.example.springclient.repository.EmployeeRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.stream.Stream;

@SpringBootApplication
public class SpringclientApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringclientApplication.class, args);
	}

//	@Bean
//	CommandLineRunner init(EmployeeRepository employeeRepository) {
//		return args -> {
//			Stream.of("John", "Julie", "Jennifer", "Helen", "Rachel").forEach(name -> {
//				Employee userApp = new Employee(name, " G",name.toLowerCase() + "@domain.com");
//				employeeRepository.save(userApp);
//			});
//			employeeRepository.findAll().forEach(System.out::println);
//		};
//	}

}
