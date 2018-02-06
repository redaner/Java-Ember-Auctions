import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import {inject as service} from '@ember/service';

export default Route.extend({

    ajax: service(),
    userService: service(),

    actions: {
        register() {
            this.get('userService').register()
            .then(data => {
                this.transitionTo('login');
            })
            .catch(error => {
                alert(error);
            })
        }
    },

    model() {
        return RSVP.hash({
            //iz baze povuci tipove korisnika
            userTypes: ["a", "b"]
        })
    }
});
