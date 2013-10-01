package br.com.backfeed.web.controller;

import br.com.backfeed.web.entity.Apresentacao;
import br.com.backfeed.web.service.ApresentacaoService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import static org.springframework.web.bind.annotation.RequestMethod.*;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ApresentacaoController {

    @Autowired
    private ApresentacaoService service;

    @RequestMapping(value="/apresentacao", method = GET)
    public String apresentacao() {
        return "apresentacao";
    }

    @RequestMapping(value="/apresentacao/lista.json", method = GET, produces="application/json")
    @ResponseBody
    public List<Apresentacao> lista(){
        return service.obterTodos();
    }
    
    @RequestMapping(value="/apresentacao/{id}/votarVerde", method = POST)
    @ResponseBody
    public void votarVerde(@PathVariable final Integer id) {
        service.votarVerde(id);
    }
    
    @RequestMapping(value="/apresentacao/{id}/votarVermelho", method = POST)
    @ResponseBody
    public void votarVermelho(@PathVariable final Integer id) {
        service.votarVermelho(id);
    }
    
    @RequestMapping(value="/apresentacao/{id}/votarAmarelo", method = POST)
    @ResponseBody
    public void votarAmarelo(@PathVariable final Integer id) {
        service.votarAmarelo(id);
    }
    
    @RequestMapping(value="/apresentacao/encerrar2013", method = GET)
    @ResponseBody
    public void encerrar() {
        service.encerrar();
    }
}