package br.com.backfeed.web.controller;

import br.com.backfeed.web.entity.Apresentacao;
import br.com.backfeed.web.service.ApresentacaoService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import static org.springframework.web.bind.annotation.RequestMethod.*;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ApresentacaoController {

    @Autowired
    private ApresentacaoService service;
    
    @RequestMapping(value="/apresentacao/", method = GET)
    public String apresentacao() {
        return "apresentacao"; //redireciona para pages/apresentacao.jsp
    }
    
    @RequestMapping(value="/apresentacao/lista.json", method = GET, produces="application/json")
    @ResponseBody
    public List<Apresentacao> lista(){
        return service.obterTodos();
    }
}