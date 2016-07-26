import JSONAPIAdapter from 'ember-data/adapters/json-api';
import Ember from 'ember';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';



export default JSONAPIAdapter.extend({
	authorizer: 'authorizer:devise',
	pathForType: function(type) {
    return Ember.String.pluralize(Ember.String.underscore(type));
  },
	host: 'http://localhost:3000/api/v1',
	headers: Ember.computed(function(){
    var token = Ember.$('meta[name="csrf-token"]').attr('content');
    return {"X-CSRF-Token": token};
  })
});
