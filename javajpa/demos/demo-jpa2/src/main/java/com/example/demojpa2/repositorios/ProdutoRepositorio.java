package com.example.demojpa2.repositorios;

import com.example.demojpa2.entidades.Produto;

public interface ProdutoRepositorio {
    Produto cadastrar(Produto produto);
    Produto bucarPorId(long id);
}
