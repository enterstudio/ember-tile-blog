import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    description: DS.attr('string'),
    author: DS.attr('string'),
    large: false,
    xlarge: false,
    fullWidth: DS.attr('boolean'),
    date: DS.attr('date'),
    coverPhoto: DS.belongsTo('image'),
    subPhotos: DS.hasMany('image'),
    inlineStyle: function() {
        var photo = this.get('coverPhoto');
        if(photo){
            return "background-image: url(" + photo.get('url') + ");";
        } else {
            return ""
        }
    }.property('coverPhoto')
});
