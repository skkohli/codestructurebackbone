	var TodoList = Backbone.Collection.extend({
		model:TodoItem,
		url:'slim/todos'
	})