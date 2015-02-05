var TodoItem = Backbone.Model.extend({
		urlRoot:"slim/app",
		toggleStatus: function(){
			if(this.get('status') === 'incomplete'){
				this.set({'status': 'complete'});
			}else{
				this.set({'status': 'incomplete'});
			}
			this.save();
		}
	});