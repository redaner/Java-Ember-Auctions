import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service';

export default Route.extend({
    userService: service(),

    model() {
        return RSVP.hash({
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
