/**
 * Created by Administrator on 2016/12/7.
 */
(function (window, document, undefined) {
    'use strict';
    var jsonp = function (url,data,callback) {

        //4、挂载回调函数（就是把callback挂到全局上去）
        //挂载之前要知道函数叫什么，因此把26行挪上来
        var calFuncName = 'my_json_cb_' + Math.random().toString().replace('.','');
        //通常不将回调函数挂载在全局，推荐在前面加上前缀，例如
        //var calFuncName = 'cbs.my_json_cb' + ****;
        //这样就可将所有回调函数都放在cbs对象下，全局只多了一个对象cbs
        window[calFuncName] = callback;

        //1、将data转换成url字符串的形式
        //{id：1, name:'lucy'}  =>  id=1&name=lucy
        var queryString = url.indexOf('?')==-1 ? '?' : '&';
        for(var key in data) {
            queryString += key + '=' + data[key] + '&';
        }
        //queryString = ?id=1&name=lucy&

        //2、处理url地址中的回调参数
        //  url += callback = asjfdasfdh(随机函数名)
        //var calFuncName = 'my_json_cb_' + Math.random().toString().replace('.','');
        queryString += 'callback=' + calFuncName;
        //queryString = ?id=1&name=lucy&cal=my_json_cb_213479812754913875

        //3、创建script标签
        var scriptElement = document.createElement('script');
        scriptElement.src = url + queryString;

        //此时还不能将其append到页面上，因为会立即执行，但回调函数还没准备好
        //因此将第4步移到最上面

        //4、挂载回调函数

        //5、将script标签放到页面中
        document.body.appendChild(scriptElement);
    };

    window.$jsonp = jsonp;
})(window, document);