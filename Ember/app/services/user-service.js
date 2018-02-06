import Service from '@ember/service';
import {inject as service} from '@ember/service';
import { reject } from 'rsvp';

export default Service.extend({
    ajax: service(),

    register() {
        return new Promise((resolve, reject) => {
            this.get('ajax').post('/v1/register', {
                xhrFields: {
                    withCredentials: true
                },
                data: {
                    poruka: "ok"
                }
            }).then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            })
        })
    }
});
