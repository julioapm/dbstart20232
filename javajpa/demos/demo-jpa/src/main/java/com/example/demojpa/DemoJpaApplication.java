package com.example.demojpa;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class DemoJpaApplication {

	private static final Logger log = LoggerFactory.getLogger(DemoJpaApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(DemoJpaApplication.class, args);
	}

	@Bean
	public CommandLineRunner demo(PessoaRepositorio repositorio) {
		return (args) -> {
			log.info("Inserindo pessoas...");
			var p = repositorio.inserir(new Pessoa("John Doe", 22));
			log.info(p.toString());
		};
	}
}
