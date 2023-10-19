package com.example.demojpa2;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.example.demojpa2.entidades.Produto;
import com.example.demojpa2.entidades.Venda;
import com.example.demojpa2.repositorios.ProdutoRepositorio;
import com.example.demojpa2.repositorios.VendaRepositorio;

@SpringBootApplication
public class DemoJpa2Application {
	private static final Logger log = LoggerFactory.getLogger(DemoJpa2Application.class);

	public static void main(String[] args) {
		SpringApplication.run(DemoJpa2Application.class, args);
	}

	@Bean
	public CommandLineRunner demo(ProdutoRepositorio produtoRepositorio, VendaRepositorio vendaRepositorio) {
		return (args) -> {
			log.info("Inserindo produtos...");
			produtoRepositorio.cadastrar(new Produto(1, "caneta", 1.50));
			produtoRepositorio.cadastrar(new Produto(2, "borracha", 3.99));
			produtoRepositorio.cadastrar(new Produto(3, "lapiseira", 5.00));
			var p1 = produtoRepositorio.bucarPorId(1);
			var p3 = produtoRepositorio.bucarPorId(3);
			log.info(p1.toString());
			log.info(p3.toString());

			log.info("Inserindo venda...");
			Venda v = new Venda();
			v.adicionar(p1, 2);
			v.adicionar(p3, 1);
			vendaRepositorio.cadastrar(v);
			
			log.info("Listar vendas...");
			var vendas = vendaRepositorio.buscarTodos();
			for(var venda : vendas) {
				log.info(venda.toString());
			}
		};
	}
}
