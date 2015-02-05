/*global Webapp, $*/

$(document).ready(function () {
    var data = {id:1};
    var todoItem = new TodoItem(data);
    var todoView = new TodoView({model:todoItem});
    var todoList = new TodoList();
    var todoListView = new TodoListView({collection:todoList});
    todoListView.render();
    var todoRouter = new TodoRouter();
    Backbone.history.start();
    //todoList.fetch({reset:true});

});
