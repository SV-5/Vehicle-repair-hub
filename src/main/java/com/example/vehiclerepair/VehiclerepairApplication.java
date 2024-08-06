package com.example.vehiclerepair;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages = "com.example.vehiclerepair.model")
public class VehiclerepairApplication {
	public static void main(String[] args) {
		SpringApplication.run(VehiclerepairApplication.class, args);
	}
}
