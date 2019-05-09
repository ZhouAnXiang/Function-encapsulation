/**
 * @authors axzhou
 * @date    2017-1-21
 * @version $Id$
 */
require.config(requireConfig);
define(function(require, exports, module) {
    var utils = require('common');
    module.exports = {
        /**
         * [postListData post请求 异步]
         * @param  {[String]} url      [请求接口地址]
         * @param  {[Object]} params     [请求参数]
         * @param  {[String]} async  [同步异步]
         * @return {[Object]}       [接口数据]
         */
        postListData: function(url, params, async) {
            return  window.utils.ajaxPost(url, params, function(data) {
                return data;
            }, 'json', async);
        },
        /**
         * [getListData get请求 异步]
         * @param  {[String]} url      [请求接口地址]
         * @param  {[Object]} params     [请求参数]
         * @param  {[String]} async  [同步异步]
         * @return {[Object]}       [接口数据]
         */
        getListData: function(url, params, async) {
            return  window.utils.ajaxGet(url, params, function(data) {
                return data;
            }, 'json', async);
        },
        /**
         * [postListDataAsyncFalse post请求 同步]
         * @param  {[String]} url      [请求接口地址]
         * @param  {[Object]} params     [请求参数]
         * @param  {[String]} async  [同步异步]
         * @return {[Object]}       [接口数据]
         */
        postListDataAsyncFalse: function(url, params, async) {
            return  window.utils.ajaxPost(url, params, function(data) {
                return data;
            }, 'json', false);
        },
        /**
         * [getListDataAsyncFalse get请求 同步]
         * @param  {[String]} url      [请求接口地址]
         * @param  {[Object]} params     [请求参数]
         * @param  {[String]} async  [同步异步]
         * @return {[Object]}       [接口数据]
         */
        getListDataAsyncFalse: function(url, params, async) {
            return window.utils.ajaxGet(url, params, function(data) {
                return data;
            }, 'json', false);
        },
        /**
         * [getListTmpl get请求异步]
         * @param  {[String]} url      [请求接口地址]
         * @param  {[Object]} params     [请求参数]
         * @param  {[String]} async  [同步异步]
         * @return {[Object]}       [接口数据]
         */
        getListTmpl: function(url, data, async) {
            return  window.utils.ajaxGet(url, data, function(data) {
                return data;
            }, 'text', async);
        },
        /**
         * [getListTmpl get请求 同步]
         * @param  {[String]} url      [请求接口地址]
         * @param  {[Object]} params     [请求参数]
         * @param  {[String]} async  [同步异步]
         * @return {[Object]}       [接口数据]
         */
        getListTmplAsyncFalse: function(url, data, async) {
            return  window.utils.ajaxGet(url, data, function(data) {
                return data;
            }, 'text', false);
        }
    };
});