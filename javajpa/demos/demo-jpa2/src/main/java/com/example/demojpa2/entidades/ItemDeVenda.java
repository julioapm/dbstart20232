package com.example.demojpa2.entidades;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "ItensDeVenda")
public class ItemDeVenda {
    @Id
    @GeneratedValue
    private long id;
    @ManyToOne(fetch = FetchType.EAGER)
    private Produto produto;
    private int quantidade;

    protected ItemDeVenda() {}

    public ItemDeVenda(Produto produto, int quantidade) {
        this.produto = produto;
        this.quantidade = quantidade;
    }

    public long getId() {
        return id;
    }

    public Produto getProduto() {
        return produto;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public double getSubTotal() {
        return quantidade * produto.getPreco();
    }

    @Override
    public String toString() {
        return "ItemDeVenda [id=" + id + ", produto=" + produto + ", quantidade=" + quantidade + ", subtotal=" + getSubTotal() + "]";
    }

    
}
