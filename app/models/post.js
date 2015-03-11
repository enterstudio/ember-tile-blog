import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    description: DS.attr('string'),
    author: DS.attr('string'),
    large: DS.attr('boolean'),
    fullWidth: DS.attr('boolean'),
    date: DS.attr('date')
});
