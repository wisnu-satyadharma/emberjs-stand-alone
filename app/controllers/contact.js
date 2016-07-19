import Ember from 'ember';

export default Ember.Controller.extend({	
	isValidEmail: Ember.computed.match('email', /^.+@.+\..+$/),
	isValidMessage: Ember.computed.gte('message.length', 5),
	isValidButton: Ember.computed.and('isValidEmail', 'isValidMessage'),
	actions: {
		sendMessage(){
			this.set('responseMessage', `We got your message and we'll get in touch soon`);
			this.set('email', '');    
			this.set('message', '');    
		}
	}
});
