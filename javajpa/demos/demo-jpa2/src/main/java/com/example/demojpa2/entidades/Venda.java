package com.example.demojpa2.entidades;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "Vendas")
public class Venda {
    @Id
    @GeneratedValue
    private long id;
    @OneToMany(fetch = FetchType.EAGER, cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    private List<ItemDeVenda> itensDeVenda = new ArrayList<>();
    private LocalDate data = LocalDate.now();

    public long getId() {
        return id;
    }
    public List<ItemDeVenda> getItensDeVenda() {
        return itensDeVenda;
    }
    public LocalDate getData() {
        return data;
    }
    
    public void adicionar(Produto produto, int quantidade) {
        ItemDeVenda item = new ItemDeVenda(produto, quantidade);
        itensDeVenda.add(item);
    }

    public double getTotal() {
        double somatorio = 0.0;
        for (var item : itensDeVenda) {
            somatorio += item.getSubTotal();
        }
        return somatorio;
    }
    @Override
    public String toString() {
        return "Venda [id=" + id + ", itensDeVenda=" + itensDeVenda + ", data=" + data + "]";
    }

}
