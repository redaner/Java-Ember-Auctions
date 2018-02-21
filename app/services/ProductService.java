package services;

import helpers.ProductFilter;
import models.Product;
import models.Subcategory;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Expression;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

public class ProductService extends AbstractService {
    public ProductService() {

    }

    public List<Product> getAllProducts(ProductFilter productFilter) {
        EntityManager entityManager = getEntityManager();
        CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();

        CriteriaQuery<Product> criteriaQuery = criteriaBuilder.createQuery(Product.class);
        Root<Product> productRoot = criteriaQuery.from(Product.class);


        List<Subcategory> listOfIds = entityManager.createQuery("SELECT DISTINCT s FROM Subcategory s WHERE name IN (:selectedCategories)").setParameter("selectedCategories", productFilter.categories).getResultList();

        criteriaQuery.select(productRoot);


        if (productFilter.sortBy.equals("rating")) {
            criteriaQuery.orderBy(criteriaBuilder.desc(productRoot.get(productFilter.sortBy)));
        } else if (productFilter.sortBy.equals("price")) {
            criteriaQuery.orderBy(criteriaBuilder.asc(productRoot.get(productFilter.sortBy)));
        }

        criteriaQuery.where(criteriaBuilder.between(productRoot.get("price"), productFilter.priceLower, productFilter.priceUpper)
                , criteriaBuilder.like(criteriaBuilder.lower(productRoot.get("name")), '%' + productFilter.searchQuery.toLowerCase() + '%')
                , criteriaBuilder.greaterThanOrEqualTo(productRoot.get("rating"), productFilter.rating)
                , listOfIds.isEmpty() ? criteriaBuilder.and() : criteriaBuilder.isTrue(productRoot.get("category").in(listOfIds)));


        try {
            return entityManager.createQuery(criteriaQuery)
                    .setFirstResult((productFilter.page - 1) * productFilter.numberOfProducts)
                    .setMaxResults(productFilter.numberOfProducts)
                    .getResultList();
        } catch (Exception e) {
            return null;
        }
    }

    public Integer getNumberOfProducts() {
        EntityManager entityManager = getEntityManager();
        CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();

        CriteriaQuery<Product> criteriaQuery = criteriaBuilder.createQuery(Product.class);
        Root<Product> productRoot = criteriaQuery.from(Product.class);

        criteriaQuery.select(productRoot);

        try {
            return entityManager.createQuery(criteriaQuery).getResultList().size();
        } catch (Exception e) {
            return null;
        }
    }

    public List<Subcategory> getAllCategories() {
        EntityManager entityManager = getEntityManager();
        CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();

        CriteriaQuery<Subcategory> criteriaQuery = criteriaBuilder.createQuery(Subcategory.class);
        Root<Subcategory> subcategoryRoot = criteriaQuery.from(Subcategory.class);

        criteriaQuery.select(subcategoryRoot);

        try {
            return entityManager.createQuery(criteriaQuery).getResultList();
        } catch (Exception e) {
            return null;
        }


    }
}
