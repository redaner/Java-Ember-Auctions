package helpers;

import forms.FilterForm;

public class ProductFilter {
    public ProductFilter() {

    }

    public Integer page;

    public Integer numberOfProducts;

    public static ProductFilter createFilter(FilterForm filterForm) {
        return new ProductFilter().setPage(filterForm.getPage())
                                  .setNumberOfProducts(filterForm.getNumberOfProducts());
    }

    public ProductFilter setPage(Integer page) {
        this.page = page;

        return this;
    }

    public ProductFilter setNumberOfProducts(Integer numberOfProducts) {
        this.numberOfProducts = numberOfProducts;

        return this;
    }

}
