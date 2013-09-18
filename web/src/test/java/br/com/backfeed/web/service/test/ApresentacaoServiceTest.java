/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.backfeed.web.service.test;

import br.com.backfeed.web.entity.Apresentacao;
import br.com.backfeed.web.enums.Status;
import br.com.backfeed.web.service.ApresentacaoService;
import java.util.List;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import static org.junit.Assert.*;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.unitils.UnitilsJUnit4TestClassRunner;
import org.unitils.dbunit.annotation.DataSet;
import org.unitils.spring.annotation.SpringApplicationContext;
import org.unitils.spring.annotation.SpringBeanByType;


@RunWith(UnitilsJUnit4TestClassRunner.class)
@SpringApplicationContext("/test-mvc-dispatcher-servlet.xml")
@DataSet("/datasets/Apresentacao.xml")
public class ApresentacaoServiceTest {;

    @SpringBeanByType
    public ApresentacaoService service;
    
    @SpringBeanByType
    public SessionFactory sessionFactory;

    public ApresentacaoServiceTest() {
    }

    @Test
    public void quandoConsultarTodosEntaoDeveRetornarTodos() {
        List<Apresentacao> apresentacoes = service.obterTodos();
        assertEquals(3, apresentacoes.size());
    }
    
    @Test
    public void quandoVotarVerdeNaApresentacaoUmElaDeveTerQuatroVotos(){
        service.votarVerde(1);
        Apresentacao apresentacao = service.obterPorId(1);
        assertEquals(4L, apresentacao.getVerde().longValue());
    }
    
    @Test
    public void quandoVotarVermelhoNaApresentacaoDoisElaDeveTerTresVotos(){
        service.votarVermelho(2);
        Apresentacao apresentacao = service.obterPorId(2);
        assertEquals(3L, apresentacao.getVermelho().longValue());
    }
    
    @Test
    public void quandoVotarAmareloNaApresentacaoDoisElaDeveTerDoisVotos(){
        service.votarAmarelo(3);
        Apresentacao apresentacao = service.obterPorId(3);
        assertEquals(2L, apresentacao.getAmarelo().longValue());
    }
    
    @Test
    public void deveEncerrarTodasVotacoes(){
        Apresentacao apresentacao = new Apresentacao(Status.ABERTA);
        apresentacao.setId(100);
        apresentacao.setStatus(Status.ABERTA);
        Session session = sessionFactory.openSession();
        session.beginTransaction();
        session.saveOrUpdate(apresentacao);
        session.getTransaction().commit();
        
        service.encerrar();
        List<Apresentacao> apresentacoes = service.obterTodos();
        for (Apresentacao a : apresentacoes){
            assertEquals(Status.ENCERRADA, a.getStatus());
        }
        
    }
    
}
