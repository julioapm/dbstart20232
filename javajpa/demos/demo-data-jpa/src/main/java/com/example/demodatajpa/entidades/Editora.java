package com.example.demodatajpa.entidades;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "Editoras")
public class Editora {
    @Id
    private int codigo;
    @Column(nullable = false)
    private String nome;
    @OneToMany(mappedBy = "editora", cascade = CascadeType.ALL, fetch= FetchType.LAZY)
    private List<Livro> livros;

    protected Editora() {}

    public Editora(int codigo, String nome) {
        this.codigo = codigo;
        this.nome = nome;
    }

    public int getCodigo() {
        return codigo;
    }

    public String getNome() {
        return nome;
    }

    public List<Livro> getLivros() {
        return livros;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setLivros(List<Livro> livros) {
        this.livros = livros;
    }

    @Override
    public String toString() {
        return "Editora [codigo=" + codigo + ", nome=" + nome + ", livros=" + livros + "]";
    }

}
