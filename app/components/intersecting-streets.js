import Ember from 'ember';

export default Ember.Component.extend({
  bounds: Ember.computed('secondStreets', 'secondSelection', function() {
    let count = this.get('secondStreetsCount');
    let context = (count > 1)?  'secondStreets' : 'firstStreets';

    return this .get(context)
                .map((street) => { return [street.lat, street.long]; });
  }),
  secondStreetsCount: Ember.computed.alias('secondStreets.length'),
  actions: {
    onFirstChange(selection) {
      this.set('firstSelection', selection);
      this.set('secondSelection', '');
    }
  }
});
