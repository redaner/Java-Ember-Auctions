import Controller from '@ember/controller';

export default Controller.extend({
    queryParams: {
        page: 'page'
    },

    page: 1,

    actions: {
        switchPage(page) {
            this.set('page', page);
            window.scrollTo(0, 0);
        }
    }
});
