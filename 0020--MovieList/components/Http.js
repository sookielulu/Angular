/**
 * Created by Administrator on 2016/12/7.
 */
'use strict';

(function (angular) {
    //由于默认angular提供的异步请求对象不支持自定义回调函数名称
    //angular随机分配的回调名称不被豆瓣支持
    var http = angular.module('MovieList.service.http',[]);
    http.service('HttpService',['$window','$document',function ($window,$document) {
        //url: http://api.douban.com/v2/movie/in_theaters
        //要将这个地址放到script标签中，并将这个script放到head或body中，使其自动执行

        // console.log($document);
        //输出为一个数组，数组中的第一个对象就是原本的document


        //原本的写法，不会出错，但是随着异步请求次数增多，会不断往页面中添加script标签，此时要想办法在调用完函数后把script标签移除。则用40行后的方法
        /*
        this.jsonp = function (url,data,callback) {
            //详细见0021--手写实现jsonp跨域
            //1、处理url地址中的回调参数
            //2、创建script标签
            //3、挂载回调函数
            //4、将script标签放到页面中

            //
            var calFuncName = 'my_json_cb_' + Math.random().toString().replace('.','');
            $window[calFuncName] = callback;
            var queryString = url.indexOf('?')==-1 ? '?' : '&';
            for(var key in data) {
                queryString += key + '=' + data[key] + '&';
            }
            queryString += 'callback=' + calFuncName;
            var scriptElement = $document[0].createElement('script');
            scriptElement.src = url + queryString;
            $document[0].body.appendChild(scriptElement);
        };
        */

        this.jsonp = function (url,data,callback) {
            var calFuncName = 'my_json_cb_' + Math.random().toString().replace('.','');

            var queryString = url.indexOf('?')==-1 ? '?' : '&';
            for(var key in data) {
                queryString += key + '=' + data[key] + '&';
            }
            queryString += 'callback=' + calFuncName;
            var scriptElement = $document[0].createElement('script');
            scriptElement.src = url + queryString;
            $window[calFuncName] = function (data) {
                callback(data);
                $document[0].body.removeChild(scriptElement);
            };
            $document[0].body.appendChild(scriptElement);
        };
    }])
})(angular);