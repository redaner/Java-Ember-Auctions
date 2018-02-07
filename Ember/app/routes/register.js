import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import {inject as service} from '@ember/service';

export default Route.extend({

    ajax: service(),
    userService: service(),

    actions: {
        register() {
            this.get('userService').register(this.get('controller.firstName'),
                                             this.get('controller.lastName'),
                                             this.get('controller.email'),
                                             this.get('controller.phoneNumber'),
                                             this.get('controller').userType,
                                             this.get('controller.password'))
            .then(data => {
                this.transitionTo('index');
            })
            .catch(error => {
                alert(error);
            })
        }
    },

    model() {
        return RSVP.hash({
            //iz baze povuci tipove korisnika
            userTypes: ["User", "Seller"]
        })
    }
});
