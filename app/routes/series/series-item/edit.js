import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.modelFor('series.seriesItem');
  },
  actions: {
    submit: function () {
      this.modelFor('series.seriesItem.edit').save().then(function () {
        this.transitionTo('series.seriesItem');
      }.bind(this));
    },

    cancel: function () {
      this.modelFor('series.seriesItem.edit').rollback();
      this.transitionTo('series.seriesItem');
    }
  }
});
