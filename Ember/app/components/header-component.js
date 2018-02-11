import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    userService: service(),
    tagName: 'nav',
    classNames: ['navbar', 'navbar-default', 'header-menu'],
    user: null,
    isUser: false,
    isAdmin: false,
    isSeller: false,

    actions: {
        logout() {
            this.get('userService').logOut()
                .then(data => {
                    this.set('user', null);
                    window.location.reload();
                })
        }
    }
});
