package com.example.demojpa2.repositorios;

import org.springframework.stereotype.Repository;

import com.example.demojpa2.entidades.Produto;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;

@Repository
@Transactional
public class ProdutoRepositorioJpa implements ProdutoRepositorio {
    @PersistenceContext
    private EntityManager em;

    @Override
    public Produto cadastrar(Produto produto) {
        em.persist(produto);
        return produto;
    }

    @Override
    public Produto bucarPorId(long id) {
        return em.find(Produto.class, id);
    }
    
}
