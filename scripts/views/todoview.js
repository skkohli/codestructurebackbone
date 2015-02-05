var TodoView = Backbone.View.extend({
		events: {
			'change input': 'toggleStatus'
		},
		toggleStatus: function(){
			this.model.toggleStatus();
			this.render();
		},
		template: _.template('<h3 class = <%= status %> >  ' +
			'<input type=checkbox ' +
			'<% if(status === "complete") print("checked") %>     />' +
			' <%= description %></h3><b><%= status %>'),
		render:function(){
			var html = this.template(this.model.toJSON());
			//console.log(this.el);
			$(this.el).html(html);
			return this;
			
		}
	})