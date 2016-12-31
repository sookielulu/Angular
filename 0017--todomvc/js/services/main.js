/**
 * Created by Administrator on 2016/12/6.
 */

(function (angular) {
    //注册一个新模块
    angular.module('app.services.main',[])
        .service('MainService',['$window',function ($window) {

            var storage = $window.localStorage;
            var todos = storage['my_todo_list'] ? JSON.parse(storage['my_todo_list']) : [];

            /*
            var todos = [
                {id:0.131, text:'学习',completed:false},
                {id:0.24, text:'吃饭',completed:true},
                {id:0.543, text:'锻炼',completed:true}
            ];
            */
            //获取唯一id
            function getId() {
                var id = Math.random();
                for(var i = 0; i < todos.length; i++) {
                    if(todos[i].id === id) {
                        id = getId();
                        break;
                    }
                }
                return id;
            }
            
            //只要todos有操作，都应更新一下
            this.save = function() {
                storage['my_todo_list'] = JSON.stringify(todos);
            };

            //控制私有字段的访问权限
            this.get = function () {
                return todos;
            };

            //业务逻辑都必须出现在服务中（专门定义业务逻辑）
            //与数据相关的都是业务逻辑

            //添加todo
            this.add = function (text) {
                //清空、参数校验等都属于界面逻辑，不属于业务逻辑
                todos.push({
                    //自动增长
                    //这里使用随机数，如果用1,2,3等数字的话，在列表先删除后添加之后，会产生id相同的情况
                    id: getId(),
                    //双向数据绑定，直接拿过来即可
                    text: text,
                    completed: false
                });
                this.save();
            };

            //处理删除
            this.remove = function (id) {
                //删除谁
                for(var i = 0; i < todos.length; i++) {
                    if(todos[i].id === id) {
                        todos.splice(i,1);
                        break;
                    }
                }
                this.save();
            };

            //清空所有已完成元素
            this.clear = function () {
                var result = [];
                for(var i = 0; i < todos.length; i++) {
                    if(!todos[i].completed){
                        result.push(todos[i]);
                    }
                }
                todos = result;
                this.save();
                //此时我们将todos指向了一个新的地址
                return todos;
            };

            //判断是否有已完成项
            this.exitCompleted = function () {
                //该函数一定要有返回值
                for(var i = 0; i < todos.length; i++) {
                    if(todos[i].completed) {
                        return true;
                    }
                }
                return false;
            };

            //更新
            this.update = function (id,target) {
                this.save();
            };

            //全选
            var now = true;
            this.toggleAll = function () {
                for(var i = 0; i < todos.length; i++) {
                    todos[i].completed = now;
                }
                now = !now;
                this.save();
            };
        }])
})(angular);