/**
 * 获取项目上下文全路径
 * 
 * @author axzhou
 * @returns 项目上下文全路径
 */
function getFullContext() {
	// 获取当前网址，如： http://localhost:8080/user/meun.jsp
	var curWwwPath = window.document.location.href;
	// 获取主机地址之后的目录，如： user/meun.jsp
	var pathName = window.document.location.pathname;
	var pos = curWwwPath.indexOf(pathName);
	// 获取主机地址，如： http://localhost:8080
	var localhostPaht = curWwwPath.substring(0, pos);
	// 获取带"/"的项目名，如：/user
	var projectName = pathName
			.substring(0, pathName.substr(1).indexOf('/') + 1);
	return (localhostPaht + projectName);
}

/**
 * 获取项目上下文路径
 * 
 * @author axzhou
 * @returns 上面上下文路径
 */
function getContext() {
	// 获取主机地址之后的目录，如： user/meun.jsp
	var pathName = window.document.location.pathname;
	// 获取带"/"的项目名，如：/user
	var CONTEXTPATH = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
	return CONTEXTPATH;
}

/**
 * 获取项目上下文全路径
 * 
 * @author axzhou
 * @returns 项目上下文全路径
 */
function getFullContext1() {
	var pathName = window.location.pathname.substring(1);
	var webName = pathName == '' ? '' : pathName.substring(0, pathName
			.indexOf('/'));
	if (webName == "") {
		return window.location.protocol + '//' + window.location.host;
	} else {
		return window.location.protocol + '//' + window.location.host + '/'
				+ webName;
	}
}