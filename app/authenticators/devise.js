import DeviseAuthenticator from 'ember-simple-auth/authenticators/devise';

export default DeviseAuthenticator.extend({
  serverTokenEndpoint: 'http://localhost:3000/api/v1/users/sign_in'
});