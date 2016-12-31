/**
 * Created by Administrator on 2016/12/6.
 */
(function (angular) {
    'use strict';

    //创建 正在热映/即将上映/top 模块
    var module = angular.module('MovieList.movie_detail',[
        'ngRoute',
        'MovieList.service.http'
    ]);

    //配置模块路由
    module.config(['$routeProvider',function ($routeProvider) {
        //当地址为/in_theaters时会找：
        // in_theaters/view.html的视图文件和InTheatersController的控制器
        $routeProvider.when('/detail/:id',{
            templateUrl: 'movie_detail/view.html',
            controller: 'MovieDetailController'
        });
    }]);

    module.controller('MovieDetailController',[
        '$scope',
        '$route',
        'HttpService',
        '$routeParams',
        'AppConfig',
        function ($scope,$route,HttpService,$routeParams,AppConfig) {
            //控制器  分为两步
            //1、设计暴露的数据
            //2、设计暴露的行为
            // $scope.subjects = data;

            $scope.movie = {};
            $scope.loading = true;
            var id = $routeParams.id;
            var apiAddress = AppConfig.detailApiAddress + id;

            //跨域的方式
            HttpService.jsonp(apiAddress,{},function (data) {
                $scope.movie = data;
                $scope.loading = false;
                $scope.$apply();
            })
        }
    ]);
})(angular);