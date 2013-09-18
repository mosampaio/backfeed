package br.com.backfeed.web.service;

import br.com.backfeed.web.entity.Apresentacao;
import br.com.backfeed.web.enums.Status;
import br.com.backfeed.web.persistence.ApresentacaoDAO;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ApresentacaoServiceImpl implements ApresentacaoService {

    @Autowired
    public ApresentacaoDAO dao;

    @Transactional(readOnly = true)
    @Override
    public Long count() {
        return new Long(dao.findAll().size());
    }

    @Transactional(readOnly = true)
    @Override
    public List<Apresentacao> obterTodos() {
        return dao.findAll();
    }

    @Transactional(readOnly = true)
    @Override
    public Apresentacao obterPorId(Integer id) {
        return dao.findById(id);
    }
    
    @Transactional()
    @Override
    public void votarVerde(Integer id) {
        dao.update(obterPorId(id).incrementarVerde());
    }
    
    @Transactional()
    @Override
    public void votarVermelho(Integer id) {
        dao.update(obterPorId(id).incrementarVermelho());
    }
    
    @Transactional()
    @Override
    public void votarAmarelo(Integer id) {
        dao.update(obterPorId(id).incrementarAmarelo());
    }
    
    @Transactional()
    @Override
    public void encerrar() {
        List<Apresentacao> lista = obterTodos();
        for (Apresentacao apresentacao : lista) {
            apresentacao.setStatus(Status.ENCERRADA);
            dao.update(apresentacao);
        }
    }
}
