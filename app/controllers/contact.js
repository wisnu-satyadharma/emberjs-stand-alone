import Ember from 'ember';

export default Ember.Controller.extend({	
	isValidEmail: Ember.computed.match('email', /^.+@.+\..+$/),
	isValidMessage: Ember.computed.gte('message.length', 5),
	isValidButton: Ember.computed.and('isValidEmail', 'isValidMessage'),
	actions: {
		sendMessage(contact){
			var _that = this;
			var email = this.get('email');
			var message = this.get('message');
			var newContact = this.store.createRecord('contact', {email: email, message: message});
			newContact.save().then(function(){
				_that.set('responseMessage', `We got your message and we'll get in touch soon`);
				_that.set('email', '');    
				_that.set('message', '');    				
			})
		}
	}
});
