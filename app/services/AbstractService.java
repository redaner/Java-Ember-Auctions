package services;

import play.db.jpa.JPA;

import javax.persistence.EntityManager;

public abstract class AbstractService {
    public AbstractService () {

    }

    public EntityManager getEntityManager() {
        return JPA.em();
    }
}
