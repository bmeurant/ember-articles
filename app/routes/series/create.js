import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.createRecord('seriesItem');
  },

  renderTemplate: function () {
    this.render('series.seriesItem.edit');
  },

  actions: {
    submit: function () {
      this.modelFor('series.create').save().then(function () {
        this.transitionTo('series.seriesItem', this.modelFor('series.create'));
      }.bind(this));
    },

    cancel: function () {
      this.modelFor('series.create').rollback();
      this.transitionTo('series');
    },

    willTransition: function () {
      this.modelFor('series.create').rollback();
      return true;
    }
  }
});
