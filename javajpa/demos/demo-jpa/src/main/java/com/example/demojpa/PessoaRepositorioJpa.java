package com.example.demojpa;

import java.util.List;

import org.springframework.stereotype.Repository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;

@Repository
@Transactional
public class PessoaRepositorioJpa implements PessoaRepositorio {
    @PersistenceContext
    private EntityManager em;

    @Override
    public List<Pessoa> buscarTodos() {
        return em
                .createQuery("from Pessoa p", Pessoa.class)
                .getResultList();
    }

    @Override
    public Pessoa buscarPorId(long id) {
        return em.find(Pessoa.class, id);
    }

    @Override
    public Pessoa inserir(Pessoa umaPessoa) {
        em.persist(umaPessoa);
        return umaPessoa;
    }

    @Override
    public Pessoa remover(long id) {
        var p = em.find(Pessoa.class, id);
        em.remove(p);
        return p;
    }

    @Override
    public void alterar(Pessoa umaPessoa) {
        em.merge(umaPessoa);
    }
    
}
