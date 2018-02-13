import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import {inject as service} from '@ember/service';

export default Route.extend({
	ajax: service(),

	model () {
		return RSVP.hash({
			/**
			 * OK message, used to check if communication between
			 * frontend and backend is established.
			 */
			okMessage: this.get('ajax').request('/v1/health')
		})
	}
});
