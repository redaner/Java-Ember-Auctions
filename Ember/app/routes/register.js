import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import {inject as service} from '@ember/service';

export default Route.extend({
    userService: service(),

    actions: {
        /**
         * Method collects form data and calls user-service method,
         * used for redirecting the page when user is successfully registered
         * or displaying errors.
         * @param {user} user 
         */
        register(user) {
            this.get('userService').register(user,
                                             this.get('controller').userType)
            .then(data => {
                window.location.href = '/';
            })
            .catch(error => {
                alert(error);
            })
        }
    },

    /**
     * Register model.
     */
    model() {
        return RSVP.hash({
            userTypes: ["User", "Seller"]
        })
    }
});
