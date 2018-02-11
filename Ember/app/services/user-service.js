import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { reject } from 'rsvp';

export default Service.extend({
    ajax: service(),

    register(firstName, lastName, email, phoneNumber, userType, password) {
        return this.get('ajax').post('/v1/register', {
            xhrFields: {
                withCredentials: true
            },
            data: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                phoneNumber: phoneNumber,
                userType: userType,
                password: password
            }
        });
    },

    login(email, password) {
        return this.get('ajax').post('/v1/login', {
            xhrFields: {
                withCredentials: true
            },
            data: {
                email: email,
                password: password
            }
        });
    },

    getCurrentUser() {
        return this.get('ajax').request('/v1/getCurrentUser');
    },

    logOut() {
        return this.get('ajax').request('/v1/logout');
    }
});
