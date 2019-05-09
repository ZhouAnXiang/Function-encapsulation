/**
 * @description: 公共的方法
 * @author：axzhou
 * @time:   2017-01-19
 */
(function (win, $) {

    var utils = {
        //ajax请求封装
        ajax: {
            /**
             * post请求
             * @param  {[string]} url      [请求接口地址]
             * @param  {[object]} params     [请求参数]
             * @param  {[function]} handler  [处理句柄]
             * @param  {[string]} dataType [交互数据类型]
             * @param  {[string]} async  [同步异步]
             * @return {[Deferd]}          [Deferd对象]
             */
            ajaxPost: function (url, params, handler, dataType, async) {
                var dtd = $.Deferred(),
                    data;
                $.ajax({
                    url: url,
                    data: params || {},
                    type: 'POST',
                    cache: false,
                    async: async === undefined ? true : async,
                    dataType: dataType || 'json'
                }).done(function (data) {
                    data = handler ? handler(data) : data;
                    dtd.resolve(data);
                }).fail(function () {
                    dtd.reject(data);
                });
                return dtd.promise();
            },

            /**
             * get请求
             * @param  {[string]} url      [请求接口地址]
             * @param  {[object]} params     [请求参数]
             * @param  {[function]} handler  [处理句柄]
             * @param  {[string]} dataType [交互数据类型]
             * @param  {[string]} async  [同步异步] 默认异步
             * @return {[Deferd]}          [Deferd对象]
             */
            ajaxGet: function (url, params, handler, dataType, async) {
                var dtd = $.Deferred(),
                    data;
                $.ajax({
                    url: url,
                    data: params || {},
                    type: 'GET',
                    cache: false,
                    async: async === undefined ? true : async,
                    dataType: dataType || 'json'
                }).done(function (data) {
                    data = handler ? handler(data) : data;
                    dtd.resolve(data);
                }).fail(function () {
                    dtd.reject(data);
                });
                return dtd.promise();
            }
        },
        /**
         * [asyncTrueRequest ajax同步封装]
         * @param  {[type]} url     [接口地址]
         * @param  {[type]} parmes  [参数]
         * @param  {[type]} handler [处理句柄]
         * @return {[type]}         [description]
         */
        asyncTrueRequest: function (url, parmes, handler) {
            // ajax同步封装
            $.ajax({
                type: 'POST',
                url: url,
                data: parmes,
                async: false,
                success: function (data) {
                    data = handler ? handler(data) : data;
                },
                error: function () {
                    utils.systemTip(GLOBAL.requestFail);
                }
            });
        },
        /**
         * 获取url参数值
         * @param  {[type]} name [description]
         * @return {[type]}      [description]
         */
        getUrlParam: function (name) {
            var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)'), //构造一个含有目标参数的正则表达式对象
                r = window.location.search.substr(1).match(reg); //匹配目标参数
            if (r != null) {
                return decodeURIComponent(r[2]);
            }
            return null;
        },
        // iframe自适应高度
        iframeHeight: function () {
            var ifm = parent.document.getElementById('iframepage'), // iframe的高度
                subWeb = document.frames ? document.frames['iframepage'].document : ifm.contentDocument, // 子页面的高度
                winHeight = window.screen.height - 154;// 窗体的高度

            if (ifm != null && subWeb != null) {
                var height = $(subWeb.body).height();

                height += 60;

                var ele = $(window.parent.document).find('.contents,#iframepage');
                ele.css('height', height);
                height > 622 ? ele.css('height', height) : ele.css('height', winHeight);
                /* ifm.height = height > 622 ? height : winHeight;*/
            }
        }
    };
    window.utils = {
        ajaxPost: utils.ajax.ajaxPost,
        ajaxGet: utils.ajax.ajaxGet,
        iframeHeight: utils.iframeHeight
    };
    $(function(){
        // 定义辅助函数--毫秒转换成日期格式
        fly.template.helper('dateFormat', function (date, format) {
        	
            date = new Date(date);

            var map = {
                "M": date.getMonth() + 1, //月份 
                "d": date.getDate(), //日 
                "h": date.getHours(), //小时 
                "m": date.getMinutes(), //分 
                "s": date.getSeconds(), //秒 
                "q": Math.floor((date.getMonth() + 3) / 3), //季度 
                "S": date.getMilliseconds() //毫秒 
            };
            format = format.replace(/([yMdhmsqS])+/g, function(all, t){
                var v = map[t];
                if(v !== undefined){
                    if(all.length > 1){
                        v = '0' + v;
                        v = v.substr(v.length-2);
                    }
                    return v;
                }
                else if(t === 'y'){
                    return (date.getFullYear() + '').substr(4 - all.length);
                }
                return all;
            });
            return format;
        });
        // 定义辅助函数--毫秒转换成日期格式
        fly.template.helper('durationFormat', function (duration, format) {
            format = function(){
                var durationRes = parseInt(duration/1000);
                return durationRes;
            }
            return format;
        });
    });
})(window, jQuery)