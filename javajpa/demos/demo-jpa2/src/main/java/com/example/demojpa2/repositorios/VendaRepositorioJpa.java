package com.example.demojpa2.repositorios;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.example.demojpa2.entidades.Venda;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;

@Repository
@Transactional
public class VendaRepositorioJpa implements VendaRepositorio {
    @PersistenceContext
    private EntityManager em;

    @Override
    public Venda buscarPorId(long id) {
        return em.find(Venda.class, id);
    }

    @Override
    public Venda cadastrar(Venda venda) {
        em.persist(venda);
        return venda;
    }

    @Override
    public List<Venda> buscarTodos() {
        return em.createQuery("from Venda v", Venda.class)
                 .getResultList();
    }
    
}
