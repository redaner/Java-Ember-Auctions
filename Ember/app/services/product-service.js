import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default Service.extend({
    ajax: service(),

    getAllProducts(page, numberOfProducts) {
        return this.get('ajax').request('/v1/getAllProducts', {
            xhrFields: {
                withCredentials: true
            },
            data: {
                page,
                numberOfProducts
            }
        });
    },

    getNumberOfProducts() {
        return this.get('ajax').request('/v1/getNumberOfProducts');
    }
});
