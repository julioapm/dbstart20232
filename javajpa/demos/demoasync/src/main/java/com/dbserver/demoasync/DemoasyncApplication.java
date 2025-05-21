package com.dbserver.demoasync;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync
public class DemoasyncApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoasyncApplication.class, args);
	}

}
