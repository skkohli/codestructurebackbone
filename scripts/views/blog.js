/*global Webapp, Backbone, JST*/

Webapp.Views = Webapp.Views || {};

(function () {
    'use strict';

    Webapp.Views.Blog = Backbone.View.extend({

        template: JST['app/scripts/templates/blog.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }

    });

})();
