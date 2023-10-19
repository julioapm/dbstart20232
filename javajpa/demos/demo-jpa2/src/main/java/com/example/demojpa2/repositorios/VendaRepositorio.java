package com.example.demojpa2.repositorios;

import java.util.List;

import com.example.demojpa2.entidades.Venda;

public interface VendaRepositorio {
    Venda buscarPorId(long id);
    Venda cadastrar(Venda venda);
    List<Venda> buscarTodos();
}
