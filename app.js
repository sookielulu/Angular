/**
 * Created by Administrator on 2016/12/4.
 */
(function (angular) {
    'use strict';
    /*主模块*/
    var myApp = angular.module('MyTodoMvc',['ngRoute']);

    //路由配置
    myApp.config(['$routeProvider',function ($routeProvider) {
        $routeProvider
            .when('/:status?', {
                controller: 'MainController',
                templateUrl: 'main_tmpl'
            })
            .otherwise({ redirectTo: '/' });
    }]);
    
    /*注册一个主要的控制器，用于往视图（view）暴露数据 */
    /*
    myApp.controller('MainController', ['$scope','$location', function ($scope,$location) {
        /!*文本框需要一个模型，为了拿到文本框输入的值 *!/
        $scope.text = '';

        /!*任务列表也需要一个模型*!/
        /!*每个任务的结构{id:1, text:'学习',completed:true}*!/
        /!*一般都要加上一个id，以便后续处理*!/
        $scope.todos = [
            {id:0.131, text:'学习',completed:false},
            {id:0.24, text:'吃饭',completed:true},
            {id:0.543, text:'锻炼',completed:true}
        ];

        //添加todo
        $scope.add = function () {
            if(!$scope.text) {
                //输入为空时不再往下执行
                return;
            }
            $scope.todos.push({
                //自动增长
                //这里使用随机数，如果用1,2,3等数字的话，在列表先删除后添加之后，会产生id相同的情况
                id: Math.random(),
                //双向数据绑定，直接拿过来即可
                text: $scope.text,
                completed: false
            });

            //清空文本框
            $scope.text = '';
        };

        //处理删除
        $scope.remove = function (id) {
            //删除谁
            for(var i = 0; i < $scope.todos.length; i++) {
                if($scope.todos[i].id === id) {
                    $scope.todos.splice(i,1);
                    break;
                }
            }
        };

        //清空所有已完成元素
        $scope.clear = function () {
            var result = [];
            for(var i = 0; i < $scope.todos.length; i++) {
                if(!$scope.todos[i].completed){
                    result.push($scope.todos[i]);
                }
            }
            $scope.todos = result;
        };

        //判断是否有已完成项
        $scope.existCompleted = function () {
            //该函数一定要有返回值
            for(var i = 0; i < $scope.todos.length; i++) {
                if($scope.todos[i].completed) {
                    return true;
                }
            }
            return false;
        };

        //当前编辑哪个元素，双击实现编辑
        $scope.currentEditingId = -1;
        $scope.editing = function (id) {
            $scope.currentEditingId = id;
        };
        $scope.save = function () {
            $scope.currentEditingId = -1;
        };

        //全选
        var now = false;
        $scope.toggleAll = function () {
            for(var i = 0; i < $scope.todos.length; i++) {
                $scope.todos[i].completed = now;
            }
            now = !now;
        };

        //状态筛选
        $scope.selector = {};

        //1、拿到锚点值
        // console.log($location);
        var path = $location.path();
        // console.log(path);
        //2、根据锚点值对selector做变换
        /!*switch (path) {
         case '/active':
         $scope.selector = {completed:false};
         break;
         case '/completed':
         $scope.selector = {completed:true};
         break;
         default:
         $scope.selector = {};
         break;
         }*!/

        $scope.$location = $location;
        //watch只能监视属于$scope的成员
        $scope.$watch('$location.path()',function (now,old) {
            //这里的$location指的是96行定义的$scope.$location
            switch (now) {
                case '/active':
                    $scope.selector = {completed:false};
                    break;
                case '/completed':
                    $scope.selector = {completed:true};
                    break;
                default:
                    $scope.selector = {};
                    break;
            }
        });

        //自定义比较函数
        $scope.equalCompare = function (source,target) {
            return source == target
        }
    }])
    */

    /*采用路由，不采用$location时的方法，234行开始*/
    myApp.controller('MainController',['$scope','$routeParams','$route',function ($scope,$routeParams,$route) {
        /*文本框需要一个模型，为了拿到文本框输入的值 */
        $scope.text = '';

        /*任务列表也需要一个模型*/
        /*每个任务的结构{id:1, text:'学习',completed:true}*/
        /*一般都要加上一个id，以便后续处理*/
        $scope.todos = [
            {id:0.131, text:'学习',completed:false},
            {id:0.24, text:'吃饭',completed:true},
            {id:0.543, text:'锻炼',completed:true}
        ];

        //添加todo
        $scope.add = function () {
            if(!$scope.text) {
                //输入为空时不再往下执行
                return;
            }
            $scope.todos.push({
                //自动增长
                //这里使用随机数，如果用1,2,3等数字的话，在列表先删除后添加之后，会产生id相同的情况
                id: Math.random(),
                //双向数据绑定，直接拿过来即可
                text: $scope.text,
                completed: false
            });

            //清空文本框
            $scope.text = '';
        };

        //处理删除
        $scope.remove = function (id) {
            //删除谁
            for(var i = 0; i < $scope.todos.length; i++) {
                if($scope.todos[i].id === id) {
                    $scope.todos.splice(i,1);
                    break;
                }
            }
        };

        //清空所有已完成元素
        $scope.clear = function () {
            var result = [];
            for(var i = 0; i < $scope.todos.length; i++) {
                if(!$scope.todos[i].completed){
                    result.push($scope.todos[i]);
                }
            }
            $scope.todos = result;
        };

        //判断是否有已完成项
        $scope.existCompleted = function () {
            //该函数一定要有返回值
            for(var i = 0; i < $scope.todos.length; i++) {
                if($scope.todos[i].completed) {
                    return true;
                }
            }
            return false;
        };

        //当前编辑哪个元素，双击实现编辑
        $scope.currentEditingId = -1;
        $scope.editing = function (id) {
            $scope.currentEditingId = id;
        };
        $scope.save = function () {
            $scope.currentEditingId = -1;
        };

        //全选
        var now = false;
        $scope.toggleAll = function () {
            for(var i = 0; i < $scope.todos.length; i++) {
                $scope.todos[i].completed = now;
            }
            now = !now;
        };

        //状态筛选
        $scope.selector = {};

        //根据路由的值的变化 做 相对调整
        //取路由中匹配出来的数据
        var status = $routeParams.status;

        switch (status) {
            case 'active':
                $scope.selector = {completed:false};
                break;
            case 'completed':
                $scope.selector = {completed:true};
                break;
            default:
                $route.updateParams({ status: '' });
                $scope.selector = {};
                break;
        }

        //自定义比较函数
        $scope.equalCompare = function (source,target) {
            return source == target
        }
    }])
})(angular);