package services;

import models.User;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.util.UUID;

public class AuthenticationService extends AbstractService {

    public String setToken(User user) {
        return user.getId().toString();
    }

    public User find(String token) {
        EntityManager entityManager = getEntityManager();
        CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();

        CriteriaQuery<User> criteriaQuery = criteriaBuilder.createQuery(User.class);
        Root<User> userRoot = criteriaQuery.from(User.class);

        criteriaQuery.select(userRoot);
        criteriaQuery.where(criteriaBuilder.equal(userRoot.get("id"), UUID.fromString(token)));

        try {
            return entityManager.createQuery(criteriaQuery).getSingleResult();
        }
        catch (Exception e) {
            return null;
        }
    }
}
