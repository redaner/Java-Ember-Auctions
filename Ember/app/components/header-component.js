import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    user: null,
    isUser: false,
    isAdmin: false,
    isSeller: false,

    userService: service(),

    actions: {
        logout() {
            this.get('userService').logOut()
                .then(data => {
                    this.refresh();
                    this.set('user', null);
                })
        }
    }
});
