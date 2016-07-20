import Ember from 'ember';

export default Ember.Controller.extend({
	emailAddress: '',
	isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
	isDisable_td: Ember.computed.not('isValid'),
	actions: {

    saveInvitation() {    
      var _that = this;
      var email = this.get('emailAddress');
    	var newInvitation = this.store.createRecord('invitation', {email: email});
    	newInvitation.save().then((response){
        console.log(response);
        _that.set('responseMessage', `Thank you! We've just saved your email address: ${_that.get('emailAddress')}`);
        _that.set('emailAddress', '');
      });
      
    }
  }
});
