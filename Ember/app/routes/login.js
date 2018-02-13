import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    userService: service(),

    actions: {
        /**
         * Method collects form data and calls user-service method,
         * used for redirecting the page when user is successfully registered
         * or displaying errors.
         * @param {user} user 
         */
        login(user) {
            this.get('userService').login(user.email, user.password)
                .then(data => {
                    window.location.href = '/';
                })
                .catch(error => {
                    alert(error);
                })
        }
    }

});
