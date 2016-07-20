import Ember from 'ember';

export default Ember.Controller.extend({	
	actions: {
		deleteContact(contact){
		 let confirmation = confirm('Are you sure?');
      if (confirmation) {
        contact.destroyRecord();
      }

		}
	}
});
