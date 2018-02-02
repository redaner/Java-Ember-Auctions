import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import {inject as service} from '@ember/service';

export default Route.extend({
	ajax: service(),

	model () {
		return RSVP.hash({
			okMessage: this.get('ajax').request('/health')
		})
	}
});
