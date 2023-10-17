package com.example.acessingdatajpa;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class AcessingDataJpaApplication {

	private static final Logger log = LoggerFactory.getLogger(AcessingDataJpaApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(AcessingDataJpaApplication.class, args);
	}

	@Bean
	public CommandLineRunner demo(CustomerRepository repository) {
		return (args) -> {
			log.info("Inserindo clientes:");
			Customer c1 = new Customer("John", "Doe");
			repository.save(c1);
			repository.save(new Customer("Jack", "Bauer"));

			log.info("Consultando clientes:");
			var clientes = repository.findAll();
			for (var cliente : clientes) {
				log.info(cliente.toString());
			}
		};
	}
}
