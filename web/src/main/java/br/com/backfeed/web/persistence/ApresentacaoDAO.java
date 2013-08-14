package br.com.backfeed.web.persistence;

import br.com.backfeed.web.entity.Apresentacao;
import java.util.List;
import org.hibernate.Criteria;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 * Classe DefaultRepository
 */
@Repository
public class ApresentacaoDAO {

    @Autowired
    public SessionFactory sessionFactory;

    @SuppressWarnings("unchecked")
    public List<Apresentacao> findAll() {
        Criteria criteria = sessionFactory.
                getCurrentSession().
                createCriteria(Apresentacao.class);
        return criteria.list();
    }
}
