import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  model() {
    return Ember.RSVP.hash({
      libraries: this.store.findAll('library'),      
      authors: this.store.findAll('author'),
      books: this.store.findAll('book')
    });
  },

  setupController(controller, model) {
    controller.set('libraries', model.libraries);
    controller.set('books', model.books);
    controller.set('authors', model.authors);
  }
});