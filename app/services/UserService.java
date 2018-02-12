package services;

import exceptions.ServiceException;
import forms.LoginForm;
import forms.RegisterForm;
import models.Role;
import models.User;
import org.mindrot.jbcrypt.BCrypt;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

public class UserService extends AbstractService {
    public UserService() {

    }

    /**
     * Method used for inserting a new row in the
     * database, so the registered user can log in
     * anytime in the future.
     * @param registerForm
     * @return user
     */
    public User register(RegisterForm registerForm) {
        EntityManager entityManager = getEntityManager();
        CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
        CriteriaQuery<Role> criteriaQuery = criteriaBuilder.createQuery(Role.class);
        Root<Role> roleRoot = criteriaQuery.from(Role.class);
        criteriaQuery.select(roleRoot);
        criteriaQuery.where(criteriaBuilder.equal(roleRoot.get("roleName"), registerForm.getUserType()));

        Role role = entityManager.createQuery(criteriaQuery).getSingleResult();

        User user = new User(registerForm.getFirstName(), registerForm.getLastName(), registerForm.getEmail(), registerForm.getPhoneNumber(), BCrypt.hashpw(registerForm.getPassword(), BCrypt.gensalt()), role);

        entityManager.persist(user);

        entityManager.flush();

        return user;
    }

    /**
     * Method used for checking if user from request exists
     * in the context, and if the correct password was sent.
     *
     * @param loginForm
     * @return user
     */
    public User login(LoginForm loginForm) {
        EntityManager entityManager = getEntityManager();
        CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();

        CriteriaQuery<User> criteriaQuery = criteriaBuilder.createQuery(User.class);
        Root<User> userRoot = criteriaQuery.from(User.class);

        criteriaQuery.select(userRoot);
        criteriaQuery.where(criteriaBuilder.equal(userRoot.get("email"), loginForm.getEmail()));

        try {
            User user = entityManager.createQuery(criteriaQuery).getSingleResult();

            if (BCrypt.checkpw(loginForm.getPassword(), user.getPassword())) {
                return user;
            } else {
                //EXCEPTIONS
                return null;
            }
        } catch (NullPointerException e) {
            //EXCEPTIONS
            return null;
        }


    }
}
