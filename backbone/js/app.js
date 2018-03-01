$(document).ready(function() {
    var HelloView = Backbone.View.extend({
        el: $('body'),
        initialize: function() {
            this.render();
        },
        render: function() {
            $(this.el).append("<h1>Hello World</h1>");
        }
    });
    var helloView = new HelloView();
});
