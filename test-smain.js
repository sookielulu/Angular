/**
 * Created by Administrator on 2016/12/21.
 */
(function (angular) {
    angular.module('app.services.main',[])
        .service('MainService',['$window',function ($window) {

            var storage = $window.localStorage;
            var todos = storage['my_todo_list'] ? JSON.parse(storage['my_todo_list']) : [];

            /*var todos = [
                {id:0.131, text:'学习',completed:false},
                {id:0.24, text:'吃饭',completed:true},
                {id:0.543, text:'锻炼',completed:true}
            ];*/

            function getId() {
                var id = Math.random();
                for(var i=0; i < todos.length; i++) {
                    if(todos[i].id === id) {
                        id = getId();
                        break;
                    }
                }
                return id;
            }

            this.save = function () {
                storage['my_todo_list'] = JSON.stringify(todos);
            };

            this.get = function () {
                return todos;
            };

            this.add = function (data) {
                todos.push({
                    id: getId(),
                    text: data,
                    completed: false
                });
                this.save();
            };

            this.remove = function (id) {
                for(var i=0; i<todos.length; i++) {
                    if (todos[i].id == id) {
                        todos.splice(i,1);
                        break;
                    }
                }
                this.save();
            };

            this.clear = function () {
                var result = [];
                for(var i=0; i<todos.length; i++) {
                    if(!todos[i].completed) {
                        result.push(todos[i]);
                    }
                }
                todos = result;
                this.save();
                return todos;
            };

            this.exitCompleted = function () {
                for (var i=0; i<todos.length; i++) {
                    if(todos[i].completed) {
                        return true;
                    }
                }
                return false;
            };

            this.update = function (id,target) {
                this.save();
            };

            var now = true;
            this.toggleAll = function () {
                for(var i=0; i<todos.length; i++) {
                    todos[i].completed = now;
                }
                now = !now;
                this.save();
            }
        }])
})(angular);