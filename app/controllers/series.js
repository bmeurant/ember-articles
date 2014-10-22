import Ember from 'ember';

export default Ember.ArrayController.extend({
  filter: "",
  sortAscending: true,

  filteredModel: function() {
    var filter = this.get('filter');

    return this.get('model').filter(function(item){
      if (item.get('title') === undefined) {
        return true;
      }
      return item.get('title').toLowerCase().match(new RegExp(filter.toLowerCase()));
    }).sort(function(a, b) {
      return this.get('sortAscending') ? (b.get('title') < a.get('title')) : (b.get('title') > a.get('title'));
    }.bind(this));
  }.property('filter', 'sortAscending', 'model.@each.title'),

  actions: {
    sort: function () {
      this.toggleProperty('sortAscending');
    }
  }
});
