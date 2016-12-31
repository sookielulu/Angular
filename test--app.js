/**
 * Created by Administrator on 2016/12/21.
 */
(function (angular) {
    var myApp = angular.module('app',['ngRoute','app.controllers.main']);

    myApp.config(['$routeProvider',function ($routeProvider) {
        $routeProvider
            .when('/:status?',{
                controller: 'MainController',
                templateUrl: 'main_tmpl'
            })
            .otherwise({
                redirectTo:'/'
            })
    }])
})(angular)