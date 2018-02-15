package forms;

public class FilterForm {
    private Integer page;
    private Integer numberOfProducts;

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
