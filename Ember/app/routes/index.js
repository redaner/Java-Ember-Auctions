import Route from '@ember/routing/route';
import Ember from 'ember';
import RSVP from 'rsvp';

export default Route.extend({
	ajax: Ember.inject.service(),

	model () {
		return RSVP.hash({
			okMessage: this.get('ajax').request('/health')
		})
	}
});
