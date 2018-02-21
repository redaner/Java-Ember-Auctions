import Component from '@ember/component';

export default Component.extend({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,

    userRating: Ember.computed('one', 'two', 'three', 'four', 'five', function () {
        if (this.get('five')) {
            return 5;
        } else if (this.get('four')) {
            return 4;
        } else if (this.get('three')) {
            return 3;
        } else if (this.get('two')) {
            return 2;
        } else if (this.get('one')) {
            return 1;
        } else {
            return 0;
        }
    }),

    starOne: Ember.computed('one', function () {
        if (this.get('one')) {
            return "full-star";
        } else {
            return "empty-star";
        }
    }),

    starTwo: Ember.computed('two', function () {
        if (this.get('two')) {
            return "full-star";
        } else {
            return "empty-star";
        }
    }),

    starThree: Ember.computed('three', function () {
        if (this.get('three')) {
            return "full-star";
        } else {
            return "empty-star";
        }
    }),

    starFour: Ember.computed('four', function () {
        if (this.get('four')) {
            return "full-star";
        } else {
            return "empty-star";
        }
    }),

    starFive: Ember.computed('five', function () {
        if (this.get('five')) {
            return "full-star";
        } else {
            return "empty-star";
        }
    }),

    sendRating() {
        this.sendAction("updateRating", this.get('userRating'));
    },

    actions: {
        oneStar() {
            if(this.get('one')) {
                this.set('one', false);
                this.set('two', false);
                this.set('three', false);
                this.set('four', false);
                this.set('five', false);
            } else {
                this.set('one', true);
                this.set('two', false);
                this.set('three', false);
                this.set('four', false);
                this.set('five', false);
            }
            console.log("LALALA");
            this.sendRating();
        },

        twoStar() {
            this.set('one', true);
            this.set('two', true);
            this.set('three', false);
            this.set('four', false);
            this.set('five', false);

            this.sendRating();
        },

        threeStar() {
            this.set('one', true);
            this.set('two', true);
            this.set('three', true);
            this.set('four', false);
            this.set('five', false);

            this.sendRating();
        },

        fourStar() {
            this.set('one', true);
            this.set('two', true);
            this.set('three', true);
            this.set('four', true);
            this.set('five', false);

            this.sendRating();
        },

        fiveStar() {
            this.set('one', true);
            this.set('two', true);
            this.set('three', true);
            this.set('four', true);
            this.set('five', true);

            this.sendRating();
        }
    }
});
