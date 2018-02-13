package services;

import play.db.jpa.JPA;

import javax.persistence.EntityManager;

public abstract class AbstractService {
    public AbstractService() {

    }

    /**
     * Returns the entity manager which will
     * be used by all services to interact with
     * the persistence context.
     * @return entity manager
     */
    public EntityManager getEntityManager() {
        return JPA.em();
    }
}
