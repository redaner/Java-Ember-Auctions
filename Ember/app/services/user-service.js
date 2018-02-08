import Service from '@ember/service';
import {inject as service} from '@ember/service';
import { reject } from 'rsvp';

export default Service.extend({
    ajax: service(),

    register(firstName, lastName, email, phoneNumber, userType, password) {
        return new Promise((resolve, reject) => {
            this.get('ajax').post('/v1/register', {
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
            }).then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            })
        })
    },

    login(email, password) {
        return new Promise((resolve, reject) => {
            this.get('ajax').post('/v1/login', {
                xhrFields: {
                    withCredentials: true
                },
                data: {
                    email: email,
                    password: password
                }
            }).then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            })
        })
    },

    getCurrentUser() {
        return new Promise((resolve, reject) => {
            this.get('ajax').request('/v1/getCurrentUser')
                .then(data => {
                    resolve(data);
                })
                .catch(error => {
                    reject(error);
                })  
        })
    },

    logOut() {
        return new Promise((resolve, reject) => {
            this.get('ajax').request('/v1/logout')
                .then(data => { 
                    resolve(data);
                })
                .catch(error => {
                    reject(error);
                })
        })
    }
});
