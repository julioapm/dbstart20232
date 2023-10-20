package com.example.demodatajpa.entidades;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Livros")
public class Livro {
    @Id
    @GeneratedValue
    private int codigo;
    @Column(nullable = false)
    private String titulo;
    @Column(nullable = false)
    private int ano;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "codEditora", nullable = false)
    private Editora editora;
    @ManyToMany(cascade = CascadeType.PERSIST, fetch = FetchType.EAGER)
    private List<Autor> autores;

    protected Livro() {}

    public Livro(String titulo, int ano, Editora editora, List<Autor> autores) {
        this.titulo = titulo;
        this.ano = ano;
        this.editora = editora;
        this.autores = autores;
    }

    public int getCodigo() {
        return codigo;
    }

    public String getTitulo() {
        return titulo;
    }

    public int getAno() {
        return ano;
    }

    public Editora getEditora() {
        return editora;
    }

    public List<Autor> getAutores() {
        return autores;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public void setAno(int ano) {
        this.ano = ano;
    }

    public void setEditora(Editora editora) {
        this.editora = editora;
    }

    public void setAutores(List<Autor> autores) {
        this.autores = autores;
    }

}
