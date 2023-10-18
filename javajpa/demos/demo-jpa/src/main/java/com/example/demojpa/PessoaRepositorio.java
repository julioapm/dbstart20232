package com.example.demojpa;

import java.util.List;

public interface PessoaRepositorio {
    List<Pessoa> buscarTodos();
    Pessoa buscarPorId(long id);
    Pessoa inserir(Pessoa umaPessoa);
    Pessoa remover(long id);
    void alterar(Pessoa umaPessoa);
}
