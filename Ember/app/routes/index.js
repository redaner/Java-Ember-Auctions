import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service';

export default Route.extend({
	ajax: service(),
	productService: service(),

	queryParams: {
		page: {
			refreshModel: true
		}
	},

	model(params) {
		return RSVP.hash({
			/**
			 * OK message, used to check if communication between
			 * frontend and backend is established.
			 */
		//	okMessage: this.get('ajax').request('/v1/health')

			products: this.get('productService').getAllProducts(params.page, 9)
				.then(data => {
					return data;
				})
				.catch(error => {
					return null;
				})
		})
	}
});
