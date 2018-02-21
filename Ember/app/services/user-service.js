import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default Service.extend({
    ajax: service(),

    /**
     * Method sends POST request to /api/v1/register
     * route, where the request is handled. 
     * Used for registering new users to the Auctions
     * App, and giving that user a session.
     * @param {user} user 
     * @param {string} userType 
     */
    register(user, userType) {
        return this.get('ajax').post('/v1/register', {
            xhrFields: {
                withCredentials: true
            },
            data: {
                ...user,
                userType
            }
        });
    },

    /**
     * Method sends POST request to /api/v1/login,
     * authenticates the user. Used to give the current
     * user a session.
     * @param {string} email 
     * @param {string} password 
     */
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

    /**
     * Method sends GET request to /api/v1/getCurrentUser,
     * used to dynamically update the frontend based on which
     * user is currently logged in/not logged in.
     */
    getCurrentUser() {
        return this.get('ajax').request('/v1/getCurrentUser');
    },

    /**
     * Method sends GET request to /api/v1/logout,
     * used to clear the current session.
     */
    logOut() {
        return this.get('ajax').request('/v1/logout');
    },

    getAllSellers() {
        return this.get('ajax').request('/v1/getAllSellers');
    }
});
