import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default Service.extend({
    ajax: service(),

    getAllProducts(page, numberOfProducts, priceLower, priceUpper, rating, searchQuery, sortBy, categories) {
        return this.get('ajax').request('/v1/getAllProducts', {
            xhrFields: {
                withCredentials: true
            },
            data: {
                page,
                numberOfProducts,
                priceLower,
                priceUpper,
                rating,
                searchQuery,
                sortBy,
                categories
            }
        });
    },

    getNumberOfProducts() {
        return this.get('ajax').request('/v1/getNumberOfProducts');
    },

    getAllCategories() {
        return this.get('ajax').request('/v1/getAllCategories');
    }
});
