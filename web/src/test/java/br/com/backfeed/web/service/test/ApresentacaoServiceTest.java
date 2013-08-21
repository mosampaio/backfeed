/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.backfeed.web.service.test;

import br.com.backfeed.web.entity.Apresentacao;
import br.com.backfeed.web.service.ApresentacaoService;
import java.util.List;
import org.junit.Assert;
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

    public ApresentacaoServiceTest() {
    }

    @Test
    public void quandoConsultarTodosEntaoDeveRetornarTodos() {
        List<Apresentacao> apresentacoes = service.obterTodos();
        Assert.assertEquals(3, apresentacoes.size());
    }
    
    @Test
    public void quandoVotarVerdeNaApresentacaoUmElaDeveTerQuatroVotos(){
        service.votarVerde(1);
        Apresentacao apresentacao = service.obterPorId(1);
        Assert.assertEquals(4L, apresentacao.getVerde().longValue());
    }
    
    
}
