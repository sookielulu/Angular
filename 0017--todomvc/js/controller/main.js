/**
 * Created by Administrator on 2016/12/5.
 */


(function (angular) {
    'use strict';

    var controllers = angular.module('app.controllers.main',['app.services.main']);

    controllers.controller('MainController',[
        '$scope',
        '$routeParams',
        '$route',
        'MainService',
        function ($scope,$routeParams,$route,MainService) {
        /*文本框需要一个模型，为了拿到文本框输入的值 */
        $scope.text = '';

        /*任务列表也需要一个模型*/
        /*每个任务的结构{id:1, text:'学习',completed:true}*/
        /*一般都要加上一个id，以便后续处理*/
        $scope.todos = MainService.get();
            //添加todo
            $scope.add = function () {
                if(!$scope.text) {
                    //输入为空时不再往下执行
                    return;
                }

                MainService.add($scope.text);

                //清空文本框
                $scope.text = '';
            };

            //处理删除
            $scope.remove = MainService.remove;

            //清空所有已完成元素
            $scope.clear = function () {
                var newTodos = MainService.clear();
                $scope.todos = newTodos;
            };

            //判断是否有已完成项
            $scope.exitCompleted = MainService.exitCompleted;

            //当前编辑哪个元素，双击实现编辑
            $scope.currentEditingId = -1;
            $scope.editing = function (id) {
                $scope.currentEditingId = id;
            };
            $scope.save = function () {
                $scope.currentEditingId = -1;
            };

            //全选
            $scope.toggleAll = MainService.toggleAll;

            $scope.toggle = function() {
                MainService.save();
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

