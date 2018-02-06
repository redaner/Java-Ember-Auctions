package services;

import models.Role;
import models.User;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;

public class UserService extends AbstractService {
    public UserService () {

    }

    public User register() {
        EntityManager em = getEntityManager();

        User user = new User("Rasim", "Sabanovic", "mail", "273871", "psw", new Role("user"));

        em.persist(user);

        em.flush();

        return user;

    }

  /*  public User login() {
        EntityManager em = getEntityManager();
        CriteriaBuilder cb = em.getCriteriaBuilder();

        CriteriaQuery<User> cq = cb.createQuery(User.class);


    } */
}
