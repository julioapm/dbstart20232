package com.example.demodatajpa.entidades;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.NamedQuery;
import jakarta.persistence.Table;

@Entity
@Table(name = "Autores")
@NamedQuery(
    name = "Autor.findByUltimoNome",
    query = "from Autor a where a.ultimoNome = :ultimoNome"
)
public class Autor {
    @Id
    @GeneratedValue
    private long codigo;
    @Column(nullable = false, length = 50)
    private String primeiroNome;
    @Column(nullable = false, length = 50)
    private String ultimoNome;

    protected Autor() {}

    public Autor(String primeiroNome, String ultimoNome) {
        this.primeiroNome = primeiroNome;
        this.ultimoNome = ultimoNome;
    }

    public long getCodigo() {
        return codigo;
    }

    public String getPrimeiroNome() {
        return primeiroNome;
    }

    public String getUltimoNome() {
        return ultimoNome;
    }

    public void setPrimeiroNome(String primeiroNome) {
        this.primeiroNome = primeiroNome;
    }

    public void setUltimoNome(String ultimoNome) {
        this.ultimoNome = ultimoNome;
    }

    @Override
    public String toString() {
        return "Autor [codigo=" + codigo + ", primeiroNome=" + primeiroNome + ", ultimoNome=" + ultimoNome + "]";
    }

}
