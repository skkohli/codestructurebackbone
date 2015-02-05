/*global Webapp, Backbone*/

Webapp.Collections = Webapp.Collections || {};

(function () {
    'use strict';

    Webapp.Collections.Blog = Backbone.Collection.extend({

        model: Webapp.Models.Blog

    });

})();
