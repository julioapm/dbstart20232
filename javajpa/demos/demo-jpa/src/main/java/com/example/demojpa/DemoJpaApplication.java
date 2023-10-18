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
			var p1 = repositorio.inserir(new Pessoa("John Doe", 22));
			log.info(p1.toString());
			var p2 = repositorio.inserir(new Pessoa("mary Doe", 23));
			log.info(p2.toString());

			log.info("Consultando pessoas");
			var pessoas = repositorio.buscarTodos();
			for (var pessoa : pessoas) {
				log.info(pessoa.toString());
			}

			log.info("Alterando pessoa...");
			var p3 = repositorio.buscarPorId(2);
			p3.setIdade(30);
			repositorio.alterar(p3);
			log.info(p3.toString());

			log.info("Consultando pessoas");
			pessoas = repositorio.buscarTodos();
			for (var pessoa : pessoas) {
				log.info(pessoa.toString());
			}

			log.info("Removendo pessoa...");
			var p4 = repositorio.remover(1);
			log.info(p4.toString());

			log.info("Consultando pessoas");
			pessoas = repositorio.buscarTodos();
			for (var pessoa : pessoas) {
				log.info(pessoa.toString());
			}
		};
	}
}
