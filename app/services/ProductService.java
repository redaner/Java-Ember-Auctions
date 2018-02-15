package services;

import helpers.ProductFilter;
import models.Product;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.util.List;

public class ProductService extends AbstractService {
    public ProductService() {

    }

    public List<Product> getAllProducts(ProductFilter productFilter) {
        EntityManager entityManager = getEntityManager();
        CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();

        CriteriaQuery<Product> criteriaQuery = criteriaBuilder.createQuery(Product.class);
        Root<Product> productRoot = criteriaQuery.from(Product.class);

        criteriaQuery.select(productRoot);

        try {
            return entityManager.createQuery(criteriaQuery).getResultList();
        } catch (Exception e) {
            return null;
        }
    }
}
