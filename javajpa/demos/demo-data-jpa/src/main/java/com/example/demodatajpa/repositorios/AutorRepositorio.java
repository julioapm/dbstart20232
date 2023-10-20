package com.example.demodatajpa.repositorios;

import java.util.List;

import org.springframework.data.repository.ListCrudRepository;

import com.example.demodatajpa.entidades.Autor;

public interface AutorRepositorio extends ListCrudRepository<Autor,Long> {
    List<Autor> findByUltimoNome(String ultimoNome);
    List<Autor> findByPrimeiroNome(String primeiroNome);
}
