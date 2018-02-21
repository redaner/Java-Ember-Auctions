package helpers;

import forms.FilterForm;
import models.Product;
import scala.Int;

import java.util.List;

public class ProductFilter {
    public ProductFilter() {

    }

    public Integer page;
    public Integer numberOfProducts;
    public Integer priceLower;
    public Integer priceUpper;
    public Double rating;
    public String searchQuery;
    public String sortBy;
    public List<String> categories;

    public static ProductFilter createFilter(FilterForm filterForm) {
        return new ProductFilter().setPage(filterForm.getPage())
                .setNumberOfProducts(filterForm.getNumberOfProducts())
                .setPriceLower(filterForm.getPriceLower())
                .setPriceUpper(filterForm.getPriceUpper())
                .setRating(filterForm.getRating())
                .setSearchQuery(filterForm.getSearchQuery())
                .setSortBy(filterForm.getSortBy())
                .setCategories(filterForm.getCategories());
    }

    public ProductFilter setPage(Integer page) {
        this.page = page;

        return this;
    }

    public ProductFilter setNumberOfProducts(Integer numberOfProducts) {
        this.numberOfProducts = numberOfProducts;

        return this;
    }

    public ProductFilter setPriceLower(Integer priceLower) {
        this.priceLower = priceLower;

        return this;
    }

    public ProductFilter setPriceUpper(Integer priceUpper) {
        this.priceUpper = priceUpper;

        return this;
    }

    public ProductFilter setRating(Double rating) {
        this.rating = rating;

        return this;
    }

    public ProductFilter setSearchQuery(String searchQuery) {
        this.searchQuery = searchQuery;

        return this;
    }

    public ProductFilter setSortBy(String sortBy) {
        this.sortBy = sortBy;

        return this;
    }

    public ProductFilter setCategories(List<String> categories) {
        this.categories = categories;

        return this;
    }

}
