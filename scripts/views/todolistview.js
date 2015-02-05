var TodoListView = Backbone.View.extend({
		initialize: function(){
			console.log("initialize ran");
			this.collection.on('add', this.addOne, this);
			this.collection.on('reset', this.addAll, this);
		},
		addOne: function(todoItem){
			console.log("add one fired");	
			var todoView = new TodoView({model: todoItem});
			this.$el.append(todoView.render().el);
		},
		addAll: function(){
			console.log('Add All Fired');
			this.collection.forEach(this.addOne, this);
		},
		render: function(){
			this.addAll();
			console.log("Render Fired");
			console.log(this.el);
			$("#container").append(this.el);
		}
	});
