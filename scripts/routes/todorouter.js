var TodoRouter = Backbone.Router.extend({
routes: { "todos/:id": "show" },
show: function(id){
	alert("you fired the url and the variable sent is"+id)
 },
initialize: function(options){
 alert("Router initialized");
}
});