package forms;

import java.util.Arrays;
import java.util.List;

public class FilterForm {
    private Integer page;
    private Integer numberOfProducts;
    private Integer priceLower;
    private Integer priceUpper;
    private Double rating;
    private String searchQuery;
    private String sortBy;
    private List<String> categories;


    /**
     * Gets priceLower
     *
     * @return value of priceLower
     */
    public Integer getPriceLower() {
        return priceLower;
    }

    /**
     * sets priceLower to parameter value
     */
    public void setPriceLower(Integer priceLower) {
        this.priceLower = priceLower;
    }

    /**
     * Gets priceUpper
     *
     * @return value of priceUpper
     */
    public Integer getPriceUpper() {
        return priceUpper;
    }

    /**
     * sets priceUpper to parameter value
     */
    public void setPriceUpper(Integer priceUpper) {
        this.priceUpper = priceUpper;
    }

    /**
     * Gets rating
     *
     * @return value of rating
     */
    public Double getRating() {
        return rating;
    }

    /**
     * sets rating to parameter value
     */
    public void setRating(Double rating) {
        this.rating = rating;
    }

    /**
     * Gets searchQuery
     *
     * @return value of searchQuery
     */
    public String getSearchQuery() {
        return searchQuery;
    }

    /**
     * sets searchQuery to parameter value
     */
    public void setSearchQuery(String searchQuery) {
        this.searchQuery = searchQuery;
    }

    /**
     * Gets sortBy
     *
     * @return value of sortBy
     */
    public String getSortBy() {
        return sortBy;
    }

    /**
     * sets sortBy to parameter value
     */
    public void setSortBy(String sortBy) {
        this.sortBy = sortBy;
    }

    /**
     * Gets categories
     *
     * @return value of categories
     */
    public List<String> getCategories() {
        return this.categories;
    }

    /**
     * sets categories to parameter value
     */
    public void setCategories(List<String> categories) {
        this.categories = categories;
    }

    /**
     * Gets page
     *
     * @return value of page
     */
    public Integer getPage() {
        return page;
    }

    /**
     * sets page to parameter value
     */
    public void setPage(Integer page) {
        this.page = page;
    }

    /**
     * Gets numberOfProducts
     *
     * @return value of numberOfProducts
     */
    public Integer getNumberOfProducts() {
        return numberOfProducts;
    }

    /**
     * sets numberOfProducts to parameter value
     */
    public void setNumberOfProducts(Integer numberOfProducts) {
        this.numberOfProducts = numberOfProducts;
    }


    public FilterForm(Integer page, Integer numberOfProducts) {
        this.page = page;
        this.numberOfProducts = numberOfProducts;
    }

    public FilterForm() {

    }
}
