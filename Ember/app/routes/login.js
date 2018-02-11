import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    userService: service(),

    actions: {
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
