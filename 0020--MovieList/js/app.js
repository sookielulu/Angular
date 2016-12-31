/**
 * Created by Administrator on 2016/12/6.
 */
'use strict';
angular.module('MovieList',[
    'ngRoute',
    'MovieList.movie_detail',
    'MovieList.movie_list',
    'MovieList.directives.auto_focus'
])
    //为模块定义一些常量
    //公共模块定义的常量在子模块中可以拿到
    //公共模块定义的控制器在子模块中拿不到
    .constant('AppConfig',{
        pageSize:5,
        listApiAddress:'http://api.douban.com/v2/movie/',
        detailApiAddress:'http://api.douban.com/v2/movie/subject/'
    })
    .config(['$routeProvider', function ($routeProvider) {
        //什么都没匹配上时跳转到  /in_theaters  地址上来
        $routeProvider.otherwise({ redirectTo : '/in_theaters/1'});
    }])
    .controller('NavController',[
        '$scope',
        '$location',
        'AppConfig',
        function ($scope,$location,AppConfig) {
            // console.log($location.path());
            $scope.$location = $location;
            $scope.$watch('$location.path()',function (now) {
                if (now.startsWith('/in_theaters')) {
                    $scope.type = 'in_theaters';
                }else if (now.startsWith('/coming_soon')) {
                    $scope.type = 'coming_soon';
                }else if (now.startsWith('/top250')) {
                    $scope.type = 'top250';
                }
            })
    }])
    .controller('SearchController',['$scope','$route',function ($scope,$route) {
        $scope.input = '';//取文本框中的输入
        $scope.search = function () {
            // console.log($scope.input);
            $route.updateParams({category:'search',q:$scope.input});
        }
    }]);