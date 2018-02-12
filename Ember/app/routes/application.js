import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service';

export default Route.extend({
    userService: service(),

    model() {
        return RSVP.hash({
            /**
             * Method calls user-service method which gets current user,
             * used for dynamically updating frontend
             * based on which user is logged in.
             */
            currentUser: this.get('userService').getCurrentUser()
                             .then(data => {    
                                 return data;
                             })
                             .catch(error => {
                                 return null;
                             })
        })
    }
});
