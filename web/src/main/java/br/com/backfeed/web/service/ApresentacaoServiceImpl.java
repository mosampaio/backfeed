package br.com.backfeed.web.service;

import br.com.backfeed.web.entity.Apresentacao;
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

    @Transactional()
    @Override
    public void votarVerde(Integer id) {
        dao.update(this.obterPorId(id).incrementarVerde());
    }

    @Transactional(readOnly = true)
    @Override
    public Apresentacao obterPorId(Integer id) {
        return dao.findById(id);
    }
}
