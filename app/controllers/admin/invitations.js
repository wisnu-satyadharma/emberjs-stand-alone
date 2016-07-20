import Ember from 'ember';

export default Ember.Controller.extend({	
	actions: {
		deleteInvitation(invitation){
		 let confirmation = confirm('Are you sure?');
      if (confirmation) {
        invitation.destroyRecord();
      }

		}
	}
});
