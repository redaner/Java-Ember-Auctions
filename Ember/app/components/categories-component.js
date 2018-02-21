import Component from '@ember/component';

export default Component.extend({
    classNames: ['container'],

    checkedCategories: [],

    actions: {
        updateCategories(category) {
            let categories = this.get('checkedCategories');

            if (categories.includes(category)) {
                categories.splice(categories.indexOf(category), 1);
            }
            else {
                categories.push(category);
            }

            this.set('checkedCategories', categories);
            
            this.sendAction("update", category);
        }
    }
});
