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
    public Long count() {
        return new Long(dao.findAll().size());
    }

    @Transactional(readOnly = true)
    public List<Apresentacao> obterTodos() {
        return dao.findAll();
    }
}
