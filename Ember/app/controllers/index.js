import Controller from '@ember/controller';

export default Controller.extend({
    queryParams: {
        page: 'page',
        priceLower: 'priceLower',
        priceUpper: 'priceUpper',
        rating: 'rating',
        searchQuery: 'searchQuery',
        sortBy: 'sortBy',
        categories: 'categories'
    },

    page: 1,
    priceLower: 0,
    priceUpper: 100000,
    rating: 0,
    searchQuery: '',
    sortBy: '',
    categories: '',

    actions: {
        switchPage(page) {
            this.set('page', page);
            window.scrollTo(0, 0);
        },

        sortBy(sort, id) {
            if(this.get('sortBy') == sort) {
                this.set('sortBy', '');
                Ember.$(id).prop('checked', false);
            }
            else {	
                this.set('sortBy', sort);
            }
        },

        updateSearchQuery() {
            this.set('searchQuery', this.get('query') ? this.get('query') : '');
        },

        updateRatingFilter(rating) {
            this.set('rating', rating);
        },

        updatePriceFilter() {
            let values = arguments[0].split(',');
            this.set('priceLower', Math.min(values[0], values[1]));
            this.set('priceUpper', Math.max(values[0], values[1]));
        },

        updateCategoryFilter(category) {
            let categories = this.get('categories').split('-');

            if (categories.includes(category)) {
                categories.splice(categories.indexOf(category), 1);
            }
            else {
                categories.push(category);
            }

            categories = categories.join('-');
            while (categories[0] == '-') {
                categories = categories.substr(1);
            }
            this.set('categories', categories);
        }
    }
});
