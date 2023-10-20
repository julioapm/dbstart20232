package com.example.demodatajpa;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.example.demodatajpa.repositorios.AutorRepositorio;

@SpringBootApplication
public class DemoDataJpaApplication {
	private static final Logger log = LoggerFactory.getLogger(DemoDataJpaApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(DemoDataJpaApplication.class, args);
	}

	@Bean
	public CommandLineRunner demo(AutorRepositorio autorRepositorio) {
		return (args) -> {
			log.info("Inserindo autores...");
		};
	}
}
