import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import {inject as service} from '@ember/service';

export default Route.extend({
    userService: service(),

    actions: {
        register(user) {
            this.get('userService').register(user.firstName,
                                             user.lastName,
                                             user.email,
                                             user.phoneNumber,
                                             this.get('controller').userType,
                                             user.password)
            .then(data => {
                window.location.href = '/';
            })
            .catch(error => {
                alert(error);
            })
        }
    },

    model() {
        return RSVP.hash({
            userTypes: ["User", "Seller"]
        })
    }
});
