import Ember from 'ember';

export default Ember.Controller.extend({	
	actions: {
		toggle(){
			var $ = Ember.$;
			$('#main').toggle('fade');
		}
	}
});
