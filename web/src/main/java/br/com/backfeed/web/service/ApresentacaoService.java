package br.com.backfeed.web.service;

import br.com.backfeed.web.entity.Apresentacao;
import java.util.List;

public interface ApresentacaoService {
    
    Long count();
    
    List<Apresentacao> obterTodos();
    
    Apresentacao obterPorId(Integer id);
    
    void votarVerde(Integer id);
    
    void votarVermelho(Integer id);
    
    void votarAmarelo(Integer id);

    void encerrar();

}
