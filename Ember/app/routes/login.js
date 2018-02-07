import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    userService: service(),

    actions: {
        login() {
            this.get('userService').login(this.get('controller.email'), this.get('controller.password'))
                .then(data => {
                    this.transitionTo('index');
                })
                .catch(error => {
                    alert(error);
                })
        }
    }

});
