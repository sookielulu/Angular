/**
 * Created by Administrator on 2016/12/6.
 */
(function (angular) {
    'use strict';

    //创建正在热映模块
    var module = angular.module('MovieList.coming_soon',[
        'ngRoute',
        'MovieList.service.http'
    ]);

    //配置模块路由
    module.config(['$routeProvider',function ($routeProvider) {
        //当地址为/in_theaters时会找：
        // in_theaters/view.html的视图文件和InTheatersController的控制器
        $routeProvider.when('/coming_soon/:page',{
            templateUrl: 'coming_soon/view.html',
            controller: 'ComingSoonController'
        });
    }]);

    module.controller('ComingSoonController',[
        '$scope',
        '$route',
        'HttpService',
        '$routeParams',
        function ($scope,$route,HttpService,$routeParams) {
            //控制器  分为两步
            //1、设计暴露的数据
            //2、设计暴露的行为
            // $scope.subjects = data;


            //分页
            var count = 4;
            var page = parseInt($routeParams.page); //页码
            var start = (page - 1) * count;  //当前页从哪开始


            $scope.loading = true;//开始加载
            $scope.subjects = [];
            $scope.title = '';
            $scope.message = '';
            $scope.totalCount = 0;
            $scope.totalPages = 0;
            $scope.currentPage = page;
            HttpService.jsonp(
                'http://api.douban.com/v2/movie/coming_soon',
                {start: start, count: count},
                function (data) {
                    $scope.title = data.title;
                    $scope.subjects = data.subjects;
                    $scope.totalCount = data.total;
                        //总页数 = 向上取整（总条数 / 每一页条数）;
                    $scope.totalPages = Math.ceil($scope.totalCount / count);
                    $scope.loading = false;
                    //在第三方的库中使用XHR发送异步请求，采用$apply通知angular重新对值进行监视
                    $scope.$apply();
            });


            //暴露一个更改上一页下一页的行为
            $scope.goPage = function (page) {
                //传过来第几页就跳到第几页
                //核心就是更新url地址里面的参数
                //$route.updateParams函数的作用就是更新当前路由上的page值
                if (page >= 1 && page <= $scope.totalPages)
                    $route.updateParams({ page: page });
            };


            /*
            var doubanApiAddress = 'http://api.douban.com/v2/movie/in_theaters';
            //测试$http服务
            //在angular中使用jsonp的方式做跨域请求，就必须在当前地址加上一个参数 callbacks = JSON_CALLBACK
            $http.jsonp(doubanApiAddress+'callbacks = JSON_CALLBACK').then(function (res) {
                if(res.status == 200){
                    $scope.subjects = res.data.subjects;
                }else{
                    $scope.message = '获取数据错误'+res.statusText;
                }
            }, function (err) {
                $scope.message = '获取数据错误'+err.statusText;
            });
            */
        }
    ]);
})(angular);