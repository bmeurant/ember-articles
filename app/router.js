import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('series', function() {
    this.route('seriesItem', { path: '/:seriesItem_id' }, function () {
      this.route('edit');
    });
  });
});

export default Router;
