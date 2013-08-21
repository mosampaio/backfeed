package br.com.backfeed.web.service;

import br.com.backfeed.web.entity.Apresentacao;
import java.util.List;

public interface ApresentacaoService {
    
    Long count();
    
    List<Apresentacao> obterTodos();
    
    void votarVerde(Integer id);
    
    Apresentacao obterPorId(Integer id);
}
