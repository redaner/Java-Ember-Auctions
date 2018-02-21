package controllers;

import forms.FilterForm;
import helpers.ProductFilter;
import models.Product;
import play.data.Form;
import play.data.FormFactory;
import play.db.jpa.Transactional;
import play.libs.Json;
import play.mvc.Result;
import services.ProductService;

import javax.inject.Inject;
import java.util.List;

public class ProductController extends BaseController {

    private ProductService productService;
    private FormFactory formFactory;

    @Inject
    public void setProductService(ProductService productService) {
        this.productService = productService;
    }

    @Inject
    public void setFormFactory(FormFactory formFactory) {
        this.formFactory = formFactory;
    }

    @Transactional(readOnly = true)
    public Result getAllProducts() {
        try {
            Form<FilterForm> filterForm = formFactory.form(FilterForm.class);
            List<Product> allProducts = productService.getAllProducts(
                    ProductFilter.createFilter(filterForm.bindFromRequest().get()));
            return ok(Json.toJson(allProducts));
        } catch (Exception e) {
            return badRequest("Can't return all products!");
        }
    }

    @Transactional(readOnly = true)
    public Result getNumberOfProducts() {
        try {
            return ok(Json.toJson(productService.getNumberOfProducts()));
        } catch (Exception e) {
            return badRequest("Bad request!");
        }
    }

    @Transactional(readOnly = true)
    public Result getAllCategories() {
        try {
            return ok(Json.toJson(productService.getAllCategories()));
        } catch (Exception e) {
            return badRequest("Bad request!");
        }

    }

}
