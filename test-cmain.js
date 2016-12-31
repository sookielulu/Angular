/**
 * Created by Administrator on 2016/12/21.
 */
(function (angular) {
    var controllers = angular.module('app.controllers.main',['app.services.main']);
    controllers.controller('MainController',[
        '$scope',
        '$route',
        '$routeParams',
        'MainService',
        function ($scope,$route,$routeParams,MainService) {
            $scope.text = '';

            $scope.todos = MainService.get();

            $scope.add = function () {
                if(!$scope.text) {
                    return;
                }

                MainService.add($scope.text);
                $scope.text = '';
            };

            $scope.remove = MainService.remove;

            $scope.clear = function () {
                var newTodos = MainService.clear();
                $scope.todos = newTodos;
            };

            $scope.completed = MainService.completed;

            $scope.currentEditingId = -1;
            $scope.editing = function (id) {
                $scope.currentEditingId = id;
            };
            $scope.save = function () {
                $scope.currentEditingId = -1;
            };

            $scope.toggleAll = MainService.toggleAll;
            $scope.toggle = function () {
                MainService.save();
            };

            $scope.selector = {};

            var status = $routeParams.status;
            switch (status){
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
            };

            $scope.equalCompare = function (source,target) {
                return source == target
            }
        }
    ])
})(angular);