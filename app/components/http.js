(function(angular) {
    /* body... */
    //由于默认Angular提供的异步请求对象不支持自定义回调函数名
    // Angular随机分配的回调函数名称不被豆瓣支持
    var http = angular.module('moviecat.services.http', []);
    http.service('HttpService', ['$document', function($document) {
        this.jsonp = function(url, data, callback) {
            /* body... */
            //挂载回调函数
            var cbFuncName = 'myjson_cb_' + Math.random().toString().replace('.', '');
            window[cbFuncName] = callback;

            //将data装换成字符传的形式
            var querystring = url.indexOf('?') == -1 ? '?' : '&';
            for (var key in data) {
                querystring += key + '=' + data[key] + '&';
            }

            //处理url中的回调
            querystring += 'callback=' + cbFuncName;

            //创建一个script标签
            var scriptElenment = document.createElement('script');
            scriptElenment.src = url + querystring;
            //将script标签放到页面中
            document.body.appendChild(scriptElenment);
        }
    }])
})(angular)
