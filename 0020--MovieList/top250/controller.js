/**
 * Created by Administrator on 2016/12/6.
 */
(function (angular) {
    'use strict';

    //创建正在热映模块
    var module = angular.module('MovieList.top250',['ngRoute']);

    //配置模块路由
    module.config(['$routeProvider',function ($routeProvider) {
        //当地址为/top250时会找：
        // top250/view.html的视图文件和top250Controller的控制器
        $routeProvider.when('/top250',{
            templateUrl: 'top250/view.html',
            controller: 'top250Controller'
        })
    }]);

    module.controller('top250Controller',['$scope',function ($scope) {

    }])
})(angular);