/**
 * Created by Administrator on 2016/12/5.
 */
/**
 * Created by Administrator on 2016/12/4.
 */
(function (angular) {
    'use strict';
    /*主模块*/
    var myApp = angular.module('app',['ngRoute','app.controllers.main']);

    //路由配置
    myApp.config(['$routeProvider',function ($routeProvider) {
        $routeProvider
            .when('/:status?', {
                controller: 'MainController',
                templateUrl: 'main_tmpl'
            })
            .otherwise({ redirectTo: '/' });
    }]);

})(angular);