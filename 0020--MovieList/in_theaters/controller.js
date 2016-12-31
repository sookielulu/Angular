/**
 * Created by Administrator on 2016/12/6.
 */
(function (angular) {
    'use strict';

    /*
    var data = [
        {
        "rating": {
            "max": 10,
            "average": 8.7,
            "stars": "45",
            "min": 0
        },
        "genres": [
            "剧情",
            "爱情",
            "动画"
        ],
        "title": "你的名字。",
        "casts": [
            {
                "alt": "https://movie.douban.com/celebrity/1185637/",
                "avatars": {
                    "small": "http://img3.doubanio.com/img/celebrity/small/13768.jpg",
                    "large": "http://img3.doubanio.com/img/celebrity/large/13768.jpg",
                    "medium": "http://img3.doubanio.com/img/celebrity/medium/13768.jpg"
                },
                "name": "神木隆之介",
                "id": "1185637"
            },
            {
                "alt": "https://movie.douban.com/celebrity/1316660/",
                "avatars": {
                    "small": "http://img3.doubanio.com/img/celebrity/small/1445093052.07.jpg",
                    "large": "http://img3.doubanio.com/img/celebrity/large/1445093052.07.jpg",
                    "medium": "http://img3.doubanio.com/img/celebrity/medium/1445093052.07.jpg"
                },
                "name": "上白石萌音",
                "id": "1316660"
            },
            {
                "alt": "https://movie.douban.com/celebrity/1018667/",
                "avatars": {
                    "small": "http://img7.doubanio.com/img/celebrity/small/36735.jpg",
                    "large": "http://img7.doubanio.com/img/celebrity/large/36735.jpg",
                    "medium": "http://img7.doubanio.com/img/celebrity/medium/36735.jpg"
                },
                "name": "长泽雅美",
                "id": "1018667"
            }
        ],
        "collect_count": 196394,
        "original_title": "君の名は。",
        "subtype": "movie",
        "directors": [
            {
                "alt": "https://movie.douban.com/celebrity/1005177/",
                "avatars": {
                    "small": "http://img3.doubanio.com/img/celebrity/small/1118.jpg",
                    "large": "http://img3.doubanio.com/img/celebrity/large/1118.jpg",
                    "medium": "http://img3.doubanio.com/img/celebrity/medium/1118.jpg"
                },
                "name": "新海诚",
                "id": "1005177"
            }
        ],
        "year": "2016",
        "images": {
            "small": "http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2395733377.jpg",
            "large": "http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2395733377.jpg",
            "medium": "http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2395733377.jpg"
        },
        "alt": "https://movie.douban.com/subject/26683290/",
        "id": "26683290"
    },
        {
            "rating": {
                "max": 10,
                "average": 0,
                "stars": "00",
                "min": 0
            },
            "genres": [
                "喜剧"
            ],
            "title": "试睡员48小时",
            "casts": [
                {
                    "alt": "https://movie.douban.com/celebrity/1364624/",
                    "avatars": {
                        "small": "http://img3.doubanio.com/img/celebrity/small/1478777436.56.jpg",
                        "large": "http://img3.doubanio.com/img/celebrity/large/1478777436.56.jpg",
                        "medium": "http://img3.doubanio.com/img/celebrity/medium/1478777436.56.jpg"
                    },
                    "name": "李天烨",
                    "id": "1364624"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1351033/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/1479787817.02.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/1479787817.02.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/1479787817.02.jpg"
                    },
                    "name": "李婉儿",
                    "id": "1351033"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1359006/",
                    "avatars": {
                        "small": "http://img3.doubanio.com/img/celebrity/small/1465913877.59.jpg",
                        "large": "http://img3.doubanio.com/img/celebrity/large/1465913877.59.jpg",
                        "medium": "http://img3.doubanio.com/img/celebrity/medium/1465913877.59.jpg"
                    },
                    "name": "程爽",
                    "id": "1359006"
                }
            ],
            "collect_count": 38,
            "original_title": "试睡员48小时",
            "subtype": "movie",
            "directors": [
                {
                    "alt": "https://movie.douban.com/celebrity/1332872/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/1376453026.25.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/1376453026.25.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/1376453026.25.jpg"
                    },
                    "name": "郭奎永",
                    "id": "1332872"
                }
            ],
            "year": "2016",
            "images": {
                "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2401053344.jpg",
                "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2401053344.jpg",
                "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2401053344.jpg"
            },
            "alt": "https://movie.douban.com/subject/26911536/",
            "id": "26911536"
        },
        {
            "rating": {
                "max": 10,
                "average": 8.1,
                "stars": "40",
                "min": 0
            },
            "genres": [
                "剧情",
                "奇幻",
                "冒险"
            ],
            "title": "神奇动物在哪里",
            "casts": [
                {
                    "alt": "https://movie.douban.com/celebrity/1010503/",
                    "avatars": {
                        "small": "http://img3.doubanio.com/img/celebrity/small/9399.jpg",
                        "large": "http://img3.doubanio.com/img/celebrity/large/9399.jpg",
                        "medium": "http://img3.doubanio.com/img/celebrity/medium/9399.jpg"
                    },
                    "name": "埃迪·雷德梅恩",
                    "id": "1010503"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1316589/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/1474083107.3.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/1474083107.3.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/1474083107.3.jpg"
                    },
                    "name": "凯瑟琳·沃特斯顿",
                    "id": "1316589"
                },
                {
                    "alt": "https://movie.douban.com/celebrity/1027317/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/31252.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/31252.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/31252.jpg"
                    },
                    "name": "丹·福勒",
                    "id": "1027317"
                }
            ],
            "collect_count": 138562,
            "original_title": "Fantastic Beasts and Where to Find Them",
            "subtype": "movie",
            "directors": [
                {
                    "alt": "https://movie.douban.com/celebrity/1275147/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/9900.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/9900.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/9900.jpg"
                    },
                    "name": "大卫·叶茨",
                    "id": "1275147"
                }
            ],
            "year": "2016",
            "images": {
                "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2392444121.jpg",
                "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2392444121.jpg",
                "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2392444121.jpg"
            },
            "alt": "https://movie.douban.com/subject/25726614/",
            "id": "25726614"
        }
        ];
    */

    //创建正在热映模块
    var module = angular.module('MovieList.in_theaters',[
        'ngRoute',
        'MovieList.service.http'
    ]);

    //配置模块路由
    module.config(['$routeProvider',function ($routeProvider) {
        //当地址为/in_theaters时会找：
        // in_theaters/view.html的视图文件和InTheatersController的控制器
        $routeProvider.when('/in_theaters/:page',{
            templateUrl: 'in_theaters/view.html',
            controller: 'InTheatersController'
        });
    }]);

    module.controller('InTheatersController',[
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
                'http://api.douban.com/v2/movie/in_theaters',
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