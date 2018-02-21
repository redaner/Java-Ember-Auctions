import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service';

export default Route.extend({
	userService: service(),
	productService: service(),

	queryParams: {
		page: {
			refreshModel: true
		},
		priceLower: {
			refreshModel: true
		},
		priceUpper: {
			refreshModel: true
		},
		rating: {
			refreshModel: true
		},
		searchQuery: {
			refreshModel: true
		},
		sortBy: {
			refreshModel: true
		},
		categories: {
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

			products: this.get('productService').getAllProducts(params.page,
				9,
				params.priceLower,
				params.priceUpper,
				params.rating,
				params.searchQuery,
				params.sortBy,
				params.categories
			)
				.then(data => {
					return data;
				})
				.catch(error => {
					return null;
				}),

			numberOfProducts: this.get('productService').getNumberOfProducts()
				.then(data => {
					return data;
				})
				.catch(error => {
					return null;
				}),

			allCategories: this.get('productService').getAllCategories()
				.then(data => {
					return data;
				})
				.catch(error => {
					return null;
				}),

			allSellers: this.get('userService').getAllSellers()
				.then(data => {
					return data;
				})
				.catch(error => {
					return null;
				})
		})
	}
});
