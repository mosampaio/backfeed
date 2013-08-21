package br.com.backfeed.web.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Classe Apresentacao
 */
@Entity
@Table(name="apresentacao")  
public class Apresentacao {  
      
    @Id  
    @GeneratedValue  
    private Integer id;  
      
    private String titulo;
      
    private String apresentador;
    
    private Long verde;
    
    private Long amarelo;
    
    private Long vermelho;
    
    private String status;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getApresentador() {
        return apresentador;
    }

    public void setApresentador(String apresentador) {
        this.apresentador = apresentador;
    }

    public Long getVerde() {
        return verde;
    }

    public void setVerde(Long verde) {
        this.verde = verde;
    }

    public Long getAmarelo() {
        return amarelo;
    }

    public void setAmarelo(Long amarelo) {
        this.amarelo = amarelo;
    }

    public Long getVermelho() {
        return vermelho;
    }

    public void setVermelho(Long vermelho) {
        this.vermelho = vermelho;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
    
    public Apresentacao incrementarVerde()
    {
        this.verde++;
        return this;
    }
}  
